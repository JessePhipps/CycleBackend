//this is the main bootstrapping file for the backend
//

import { Elysia } from "elysia";
import { rateLimit } from "elysia-rate-limit";
import swagger from "@elysiajs/swagger";
import cors from "@elysiajs/cors";
import initDB from "./database";
import initGetGeo from "./routes/getGeo";
import initUsers from "./routes/user";
import { Lucia } from "lucia";
import { BunSQLiteAdapter } from "@lucia-auth/adapter-sqlite";
import { isAuthenticated } from "./middleware/auth";
import initAuth from "./routes/auth";
import { cookie } from "@elysiajs/cookie";
import auth from "./routes/auth";
import initEmail from "./routes/email";
import initEditGeo from "./routes/editGeo";
import { staticPlugin } from "@elysiajs/static";
import { ip } from "../node_modules/elysia-ip/src";

export const db = initDB();

export const adapter = new BunSQLiteAdapter(db, {
  user: "user",
  session: "session",
});
export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    return {
      username: attributes.username,
    };
  },
}); //

const app = new Elysia() //
  //used to statically serve the built client files in /public
  .use(
    staticPlugin({
      prefix: "/",
      alwaysStatic: true,
    })
  )
  //provides automatically generated documentation
  //open docs by going to /v1/docs in browser
  .use(
    swagger({
      //
      //
      //documentation
      path: "/v1/docs",
      documentation: {
        info: {
          title: "Geo App Documentation",
          version: "1.0.0",
        },
      },
    })
  )
  .use(ip())
 

  //specifies that this is the intended origin that communicates with the server
  // .use(
  //   cors({
  //     origin: ["https://cyclebackend-dn4hl3ql4q-uc.a.run.app"],
  //   })
  // ).use(rateLimiter)

  //routes that that don't require authorization
  .group("/v1", (app) =>
    app
      .use(initGetGeo(db))
      .use(
        rateLimit({
          scoping: 'local',
          max: 20,
        })
      )
      .use(initEmail())
      .use(initAuth(db))
  )
  //routes that require auth
  .group("/a1", (app) =>
    app
      //middleware that updates the user object
      .use(isAuthenticated)
      //checks if the user is authorized before allowing access
      .on("beforeHandle", async ({ set, user, session }) => {
        if (!session) {
          set.status = 401;
          return {
            success: false,
            message: "Unauthorized",
            data: null,
          };
        }

        if (!user) {
          set.status = 401;
          return {
            success: false,
            message: "Unauthorized",
            data: null,
          };
        }
      })
      //group of guarded endpoitns
      //use GET on /user/checksession to check if session if valid
      .use(initEditGeo(db)) //list of crud endpoints
      .use(initUsers(db))
  ) //all other requests are assumed to be for the client files
  .get("/*", async () => {
    return Bun.file("./public/index.html");
  })
  //specifies port number
  .listen(3000);

console.log(`API is running at ${app.server?.hostname}:${app.server?.port}`);
