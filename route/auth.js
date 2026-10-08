const express = require('express');
const router = express.Router();
const authen = require('../module/authen');

router.post('/register', async (req, res) => {
    try {
        const { user, email, password } = req.body;
        const exiting = await authen.findOne({ email });
        if (exiting) return res.status(400).json({ msg: "User already exists" });
        const newuser = await authen.create({ user, email, password });
        res.status(200).json({ msg: "User created successfully", newuser });
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const existing = await authen.findOne({ email });
        if (!existing) return res.status(400).json({ msg: "User does not exist" });
        if (existing.password !== password) return res.status(400).json({ msg: "Invalid password" });
        res.status(200).json({ msg: "Login successful", existing });
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
})

module.exports = router;