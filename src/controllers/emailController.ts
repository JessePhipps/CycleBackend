import nodemailer from "nodemailer";
import { brotliDecompressSync } from "zlib";
import Database from "bun:sqlite";
import { Argon2id } from "oslo/password";

//handles the form submission from /routesuggestion
//uses nodemailer to send route suggestion via email
export default (db: Database) => {
  //create transporter
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  return {
    validateEmail: async ({ body, set }) => {
      console.log(process.env.EMAIL_USER);
      if (body.email === process.env.EMAIL_USER) {
        const length = 10;
        const characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
        let password = "";
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          password += characters[randomIndex];
        }
        //send email with password
        const mailOptions = {
          from: process.env.EMAIL_FROM,
          to: process.env.EMAIL_TO,
          subject: "New admin password",

          text: `This is your new password \n${password}`,
        };
        transporter.sendMail(mailOptions);
        // // //
        const hashedPassword = await new Argon2id().hash(password);
        try {
          const query = db
            .prepare("UPDATE user SET password = ?")
            .run(hashedPassword);

          set.status = 200;
          return new Response(
            JSON.stringify({ valid: true, message: "correct email" }),
            {
              headers: { "Content-Type": "application/json" },
            }
          );
        } catch (e) {
          set.status = 500;
          console.log(e);
          return new Response(
            JSON.stringify({ message: "internal server error" }),
            {
              headers: { "Content-Type": "application/json" },
            }
          );
        }
      } else {
        set.status = 400;
        return new Response(
          JSON.stringify({ valid: false, message: "incorrect email" }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    },
    sendSuggestion: ({ body, set }) => {
      // mail options
      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: "New Route Suggestion from Bolivar Cycling Website!",
        attachments: [
          {
            filename: body.name + ".gpx",
            content: body.file,
          },
        ],
        text:
          "A new route has been submitted for your review! \nName of route: " +
          body.name +
          "\nPoints of interest: " +
          body.poi +
          "\nContact email: " +
          body.email,
      };
      try {
        transporter.sendMail(mailOptions);
        set.status = 200;
        return new Response(JSON.stringify({ message: "success!" }), {
          headers: { "Content-Type": "application/json" },
        });
      } catch (e) {
        set.status = 500;
        console.log(e);
        return new Response(JSON.stringify({ message: "error" }), {
          headers: { "Content-Type": "application/json" },
        });
      }
    },
  };
};
