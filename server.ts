'use strict'
import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
// import cookieParser from "cookie-parser";
// import csrf from "csurf";
// import admin from "firebase-admin";
import error from "./middleware/error"
import routes from "./routes"

const config = require('./config/config')
// const csrfMiddleware = csrf({ cookie: true });
const app = express()

app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));
app.use(bodyParser.json());
// app.use(cookieParser());
// app.use(csrfMiddleware);

// app.all("*", (req, res, next) => {
//   res.cookie("XSRF-TOKEN", req.csrfToken());
//   next();
// });




// app.use('/app', userRoutes.routes);



// app.post("/sessLogin", (req, res) => {
//   const idToken = req.body.idToken.toString();

//   const expiresIn = 60 * 60 * 24 * 5 * 1000;

//   admin
//     .auth()
//     .createSessionCookie(idToken, { expiresIn })
//     .then(
//       (sessionCookie) => {
//         const options = { maxAge: expiresIn, httpOnly: true };
//         res.cookie("session", sessionCookie, options);
//         res.end(JSON.stringify({ status: "success" }));
//       },
//       (error) => {
//         res.status(401).send("UNAUTHORIZED REQUEST!");
//       }
//     );
// });

// app.get("/profile", function (req, res) {
//   const sessionCookie = req.cookies.session || "";

//   admin
//     .auth()
//     .verifySessionCookie(sessionCookie, true)
//     .then((userData) => {
//       console.log("Logged in:", userData.email)
//     })
//     .catch((error) => {
//       console.log(error.code);
//       res.redirect("/login");
//     });
// });

// app.get("/sessExit", (req, res) => {
//   res.clearCookie("session");
//   console.log("Logout and Clean Cookie!");
//   res.redirect("/login");
// });
app.use("/", routes);
app.use("/", error);

app.listen(config.port, () => { console.log(`Server started on http://localhost: ${config.port}`) })
