import nodemailer from "nodemailer";
import { brotliDecompressSync } from "zlib";
//handles the form submission from /routesuggestion
//uses nodemailer to send route suggestion via email
export default () => {
  //create transporter
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });


  return {
    sendSuggestion: ({ body, set }) => {
      // mail options
      console.log(body)
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
          body.name + "\nPoints of interest: " + body.poi + "\nContact email: " + body.email,

      };
      transporter.sendMail(mailOptions);
      set.status = 200;
      return new Response(JSON.stringify({ message: "success!" }), {
        headers: { "Content-Type": "application/json" },
      });
    },
  };
};
