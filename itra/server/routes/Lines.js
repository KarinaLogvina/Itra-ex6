const express = require("express");
const router = express.Router();
const { Lines } = require("../models");
const Users = require("../models/Users");

router.get('/users', async (req, res) => {
    const listofUsers = await Users.findAll();
    res.json(listofUser);
});

router.post("/", async (req, res) => {
    const line = req.body;
    await Lines.create(line);
    res.json(line);

})

module.exports = router;