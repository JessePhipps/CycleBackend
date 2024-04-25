/* implements api endpoints for the user controller */

import { Elysia } from "elysia";
import initUserController from "../controllers/userController";
import Database from "bun:sqlite";
//checksession used by frontend to evaluate users login status
//this can be found in src/router/index.js
// all other routes deprecated
export default (db: Database) => {
  const UserController = initUserController(db);
  return (
    new Elysia({ prefix: "/user" })
      //.get("/", UserController.getUserList)
      // .post("/", UserController.createUser)
      // .put("/:id", UserController.updateUser)
      // .delete("/:id", UserController.removeUserById)
      // .post("/:username", UserController.validateUser)
      .post("/checksession", UserController.checksession)
      .post("/checkpwcode", UserController.checkPWCode)

    // .post("/forgotpassword", UserController.changePassword)
  );
};
