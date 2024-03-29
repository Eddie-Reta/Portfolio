const express = require("express");
const PORT = process.env.PORT || 5001
const path = require("path");
const cors = require("cors");
const app = express();
const emailjs = require("emailjs-com");

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "./client/build/index.html")));
// }

app.use(express.json({limit: "1mb"}));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/api/test", (req, res) => {
  res.send("test");
});

// Have Node serve the files for our built React app
app.use(express.static(path.join(__dirname, './client/build')));

// app.post("/api/email", (req, res) => {
// //  email api
// console.log(req.body)
//   const templateParams = {
//     user_name: req.body.user_name,
//     message: req.body.message,
//     user_email: req.body.user_email
//   };
//  emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams)
//     .then(function(response) {
//        console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//       if (error) { console.log('FAILED...', error) };
//     });
// })

app.get("*", function(_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
    );
})
// app
// .get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "client/build", "index.html"));
// })
// .post("/api", (req, res) => {
// //  email api
//   const templateParams = {
//     user_name: req.body.user_name,
//     message: req.body.message,
//     user_email: req.body.user_email
//   };
 
 
// emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams)
//     .then(function(response) {
//        console.log('SUCCESS!', response.status, response.text);
//     }, function(error) {
//       if (error) { console.log('FAILED...', error) };
//     });
// });


//email api
// emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.USER_ID)
// .then((result) => {
//     console.log(result.text);
// }, (error) => {
//     console.log(error.text);
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

module.exports = app;