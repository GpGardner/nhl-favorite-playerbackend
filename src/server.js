const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const players = express.Router();
const PORT = process.env.PORT || 5000;

const Player = require("./Player.model");
const Team = require("./Team.model");

const app = express();

app.use(cors());
app.use(express.json());


//hard coded for now, for testing
players.route("/favoriteplayers").get((req, res) => {
  res.status(200).json([{
    name: "Sidney Crosby",
    teamName: "Pittsburgh Penguins",
    team: "penguins",
    id: "8471675",
  }, {
    name: "Alex Ovechkin",
    teamName: "Washington Capitals",
    team: "capitals",
    id: "8471214",
  }, {
    name: "Andrei Vasilevskiy",
    teamName: "Tampa Bay Lightning",
    team: "lightning",
    id: "8476883",
  }, {
    name: "Marc-Andre Fluery",
    teamName: "Las Vegas Golden Knights",
    team: "golden_knights",
    id: "8470594",
  }]);
});

players.route("/favoriteteams").get((req,res) => {
  res.status(200).json([{
    name: "Penguins",
    link: "penguins"
  }, {
    name: "Capitals",
    link: "capitals"
  }, {
    name: "Golden Knights",
    link: "golden_knights"
  }
  ])
})


//This will be the route to add a new player
// players.route("/addPlayer").post((req, res) => {
//   const player = new Player(req.body);
//   player.save().then((player) => {
//     res.status.json(player);
//   })
//   .catch((err) => {
//     res.status(400).send("New Favorite Player Failed")
//   })
// })

//This will be the route to add a new player
// players.route("/addTeam").post((req, res) => {
//   const team = new Team(req.body);
//   team.save().then((team) => {
//     res.status.json(team);
//   })
//   .catch((err) => {
//     res.status(400).send("New Favorite Team Failed")
//   })
// })

app.use("/api", players);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => console.log(`The server is running on port: ${PORT}`));
