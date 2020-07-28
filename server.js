console.log("server working")
const express = require("express");
const session = require("express-session");
const path = require("path")
const app = express();
const PORT = 8080;
const mysql = require("mysql");
const passport = require("./config/passport");
const db = require("./models")

// Serve static assets
app.use(express.static("./client"));


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "carFacts"
    })
}
// Creating express app and configuring middleware needed for authentication
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

//  app.post()
const routes = require("./routes");
app.use(routes);

// Catch all Last to Load
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "./client/public/index.html")))

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});

// app.listen(PORT, () => {
//     console.log(
//         "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//         PORT,
//         PORT
//     );
// });