const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const players = express.Router();
const PORT = process.env.PORT || 5000;

const Player = require("./player.model");

const app = express();

app.use(cors());
app.use(express.json());

players.route("/").get((req, res) => {
  res.status(200).json([{
    name: "Sidney Crosby",
    team: "penguins",
    id: "8471675",
  }, {
    name: "Alex Ovechkin",
    team: "capitals",
    id: "8471214",
  }, {
    name: "Andrei Vasilevskiy",
    team: "lightning",
    id: "8476883",
  }, {
    name: "Marc-Andre Fluery",
    team: "golden_knights",
    id: "8470594",
  }]);
});

app.use("/players", players);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => console.log(`The server is running on port: ${PORT}`));
