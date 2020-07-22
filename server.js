const express = require("express");
const path = require("path")
const app = express();
const PORT = 8080;

// Serve static assets
app.use(express.static("./client/build/"));

// API routes are loaded before "catch all"
const api = ["api info", "api info"]
app.get("/api", (req, res) => {
    res.json(api)
})
//  app.post()





// Catch all Last to Load
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "./client/build/index.html")))

app.listen(PORT, () => console.log("App running on PORT: " + PORT));
