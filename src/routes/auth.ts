/* provides api endpoints for the auth controller */

import { db } from "../index";
import { Argon2id } from "oslo/password";
import { lucia } from "../index";
import {} from "bun:sqlite";
import { generateId } from "lucia";
import { Elysia } from "elysia";
import Database from "bun:sqlite";
import initAuthController from "../controllers/authController";
//api endpoints for auth 
export default (db: Database) => {
  const AuthController = initAuthController(db);
  return new Elysia({ prefix: "/auth" }).post(
    "/signup",
    AuthController.signupUser
  ).post("/login", AuthController.login)
  .post("/logout", AuthController.logout)
 ;
};