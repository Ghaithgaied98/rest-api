const express = require("express");
const router = express.Router();
const Utilisateur = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const Utilisateurs = await Utilisateur.find();
    res.json(Utilisateurs);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.post("/", async (req, res) => {
  const User = new Utilisateur({
    UserName: req.body.UserName,
    age: req.body.age,
  });

  try {
    const a1 = await User.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const user = await Utilisateur.findById(req.params.id);
    user.UserName = req.body.name;
    const a1 = await user.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Utilisateur.findByIdAndDelete(req.params.id);
  } catch (error) {
    res.send("Error");
  }
});

module.exports = router;