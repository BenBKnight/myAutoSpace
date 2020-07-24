const express = require("express");
const session = require("express-session");
const path = require("path")
const app = express();
const PORT = 8080;
const mysql = require("mysql");
const passport = require("./config/passport");


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
    });
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

// API routes are loaded before "catch all"
const api = ["api info", "api info"]
app.get("/api", (req, res) => {
    res.json(api)
})
//  app.post()





// Catch all Last to Load
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "./client/public/index.html")))

app.listen(PORT, () => console.log("App running on PORT: " + PORT));
