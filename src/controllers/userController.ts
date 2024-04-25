/* this is the user controller. It implements the logic to check the session of the user for 
authentication, as well as change the password. it includes functions to get and validate users.
it also includes logic to delete and update users.  */
import Database from "bun:sqlite";
import { Argon2id } from "oslo/password";
import { lucia } from "../index";
export default (db: Database) => {
  return {
    checksession: async ({ set }) => {
      set.status = 200;
      return new Response(JSON.stringify({ message: "passed" }), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    checkPWCode:async ({ body, set }) => {
      set.status = 200;

      return new Response(JSON.stringify({ message: "passed" }), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    changePassword: async ({ body, set }) => {
      //generate code
      //send code to email
      //await
      const username: string | null = body.username ?? null;
      const password: string | null = body.password ?? null;

      if (!password || password.length < 6 || password.length > 255) {
        set.status = 400;
        return new Response(JSON.stringify({ message: "invalid password" }), {
          headers: { "Content-Type": "application/json" },
        });
      }
      const hashedPassword = await new Argon2id().hash(password);
      try {
        db.prepare(
          'UPDATE user SET password = ? WHERE username = ?'
        ).run(hashedPassword, body.username);

        set.status = 200;
        return new Response(
          JSON.stringify({ success: true, message: "success!" }),
        );
      } catch (e) {
        set.status = 500;
        return new Response(JSON.stringify({ message: e.message }), {
          headers: { "Content-Type": "application/json" },
        });
      } 
    },
    //deprecated
    validateUser: ({ body, set }) => {
      //
      const query = db.prepare(
        `SELECT (username,password) FROM user WHERE username = $username`
      );
      const username = body.username;
      const password = body.password;
      query.run({ $username: username, $password: password });

      if (password && username == username + password) {
        set.status = 200;
        return new Response(JSON.stringify({ message: "success!" }), {
          headers: { "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ message: "fail!" }), {
        headers: { "Content-Type": "application/json" },
      });
    },

    getUserList: ({ set }) => {
      const query = db.query(`SELECT * FROM user;`);
      const result = query.all();
      set.status = 200; //OK status

      return new Response(JSON.stringify({ users: result }), {
        headers: { "Content-Type": "application/json" },
      });
    },
    getUserById: ({ params: { id }, set }) => {
      const query = db.query(`SELECT * FROM user WHERE id = $id;`);
      const result = query.get({ $id: id });
      set.status = 200;

      return new Response(JSON.stringify({ user: result }), {
        headers: { "Content-Type": "application/json" },
      });
    },
    removeUserById: ({ params: { id }, set }) => {
      const query = db.query(`DELETE FROM user WHERE id = $id;`);
      const result = query.get({ $id: id });
      set.status = 200;
      return new Response(JSON.stringify({ message: "success!", id }), {
        headers: { "Content-Type": "application/json" },
      });
    },
    createUser: ({ body, set }) => {
      //body = json content of post request

      const query = db.prepare(
        `INSERT INTO users (username, password) VALUES ($username, $password);`
      );
      const { username, password } = body;
      query.run({ $username: username, $password: password });

      set.status = 200;

      return new Response(JSON.stringify({ message: "success!" }), {
        headers: { "Content-Type": "application/json" },
      });
    },
    updateUser: ({ params: { id }, body, set }) => {
      const attrs = Object.keys(body);
      const updateValues = attrs.map((a) => `${a} = $${a}`).join(`, `);
      let query = db.query(`UPDATE users SET ${updateValues} WHERE id = $id;`);
      let updateObj = {};
      for (let a in body) {
        updateObj = {
          ...updateObj,
          ["$" + a]: body[a],
        };
      }
      let result = query.run({ ...updateObj, $id: id });
      set.status = 200;

      return new Response(JSON.stringify({ message: "success!" }), {
        headers: { "Content-Type": "application/json" },
      });
    },
  };
};
