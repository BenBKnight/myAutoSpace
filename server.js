const express = require("express");
const session = require("express-session");
const path = require("path")
const app = express();
const PORT = 8080;
const mysql = require("mysql");
require('dotenv').config()
// console.log(process.env);
const db = require("./models")

// Serve static assets
app.use(express.static("./client"));

// Remove when deploying
const cors = require("cors")
app.use(cors());
    connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'Iloveskymarie1!',
        database: 'carFacts'
    })
// Creating express app and configuring middleware needed for authentication
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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