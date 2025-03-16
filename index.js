const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("HELLO THIS IS MY FIRST DEV OPS PROJECT!"));
app.listen(3000, () => console.log("App running on port 3000"));
