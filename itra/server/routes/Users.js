const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

const { sign } = require("jsonwebtoken");

router.post("/", async (req, res) => {
    const { username, mail, status, registrationDate, password } = req.body
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            mail: mail,
            status: "active",
            password: hash,
        })
        res.json("SUCCES");
    })
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({ where: { username: username } });
    let random = (Math.random() + 1).toString(36).substring(7);

    if (!user) {
        res.json({ error: "User Doesn't Exist" })
    } else {
        bcrypt.compare(password, user.password).then((match) => {
            if (!match) {
                res.json({ error: "Wrong Username And Password Compinetion" })
            } else {
                const accessToken = sign({ username: user.username, id: user.id }, random);
                res.json(accessToken);
            }
        })
    }
})

module.exports = router;