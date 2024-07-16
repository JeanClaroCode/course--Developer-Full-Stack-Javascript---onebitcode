var express = require("express");
var router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.JWT_TOKEN;
const WithAuth = require('../middlewares/auth');

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });

  try {
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error registering new user" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) res.status(401).json({ error: "Incorrect email or password" });
    else {
      user.isCorrectPassword(password, function (err, same) {
        if (!same)
          res.status(401).json({ error: "Incorrect email or password" });
        else {
          const token = jwt.sign({ email }, secret, { expiresIn: "10d" });
          res.json({ user: user, token: token });
        }
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal error, please try again" });
  }
});

const bcrypt = require('bcrypt');
const saltRounds = 10;

router.put("/edit", WithAuth, async function (req, res) {
  const { name, email, password } = req.body;
  const updates = {};

  if (name) {
    updates.name = name;
  }
  
  if (email) {
    updates.email = email;
  }

  try {
    let user = await User.findOne({ _id: req.user._id });

    if (!user) {
      return res.status(404).json({ msg: 'Usuário não encontrado' });
    }


    const isSamePassword = await bcrypt.compare(password, user.password);

    if (isSamePassword) {
      return res.status(400).json({ msg: 'Insira uma senha diferente' });
    } else {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      updates.password = hashedPassword;
    }

    const updatedUser = await User.findOneAndUpdate(
      { _id: req.user._id },
      { $set: updates },
      { new: true }
    );

    res.json(updatedUser);
  } catch (error) {
    console.error('Erro no servidor:', error.message);
    res.status(500).send('Erro interno no servidor');
  }
});


router.delete("/delete", WithAuth, async function (req, res) {
  try {
    const { password } = req.body;
    const user = await User.findById(req.user._id); 

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isSamePassword = await bcrypt.compare(password, user.password);
    
    if (isSamePassword) {
      await user.deleteOne(); 
      return res.status(201).json({ message: "User deleted successfully" });
    } else {
      return res.status(401).json({ error: "Incorrect password" });
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/", WithAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const { _id, name, email, created_at, updated_at } = user;
    res.json({ _id, name, email, created_at, updated_at });
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});


module.exports = router;