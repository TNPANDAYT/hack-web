// Safe Simulation Server - NOT REAL HACKING

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let latestData = {
  ip: "0.0.0.0",
  location: "Unknown",
  time: "Not received"
};

// Victim sends fake IP to server
app.post("/send", (req, res) => {
  latestData = req.body;  // Still safe (fake)
  res.json({ status: "OK" });
});

// Attacker reads data
app.get("/read", (req, res) => {
  res.json(latestData);
});

app.listen(3000, () => {
  console.log("Simulation server running on http://localhost:3000");
});
