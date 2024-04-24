import { Elysia } from "elysia";
import initEmailController from "../controllers/emailController";
import Database from "bun:sqlite";

//api endpoint for route suggestions

export default (db: Database) => {
  // initialze email controller
  const emailController = initEmailController(db);

  // define route for email
  return (
    new Elysia({ prefix: "/email" })
      // use sendmail
      .post("/", emailController.sendSuggestion)
      .post("/validate", emailController.validateEmail)
  );
};
