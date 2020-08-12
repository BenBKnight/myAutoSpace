const express = require("express");
const session = require("express-session");
const path = require("path")
const app = express();
const mysql = require("mysql");
require('dotenv').config()
// console.log(process.env);
const db = require("./models")

// Serve static assets
app.use(express.static(path.join(__dirname, "./client/build")));

//jawsDB
// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: process.env.MYSQL_PASS,
        database: 'carFacts'
    });
}

// const cors = require("cors")
// app.use(cors());

// Creating express app and configuring middleware needed for authentication
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  app.post()
const routes = require("./routes");
app.use(routes);

// Catch all Last to Load
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "./client/build/index.html")))

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});