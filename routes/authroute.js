const express = require("express");
const router = express.Router();

console.log("authroute.js loaded");

const { register, login } = require("../controllers/authcontroller");

router.get("/test", (req, res) => {
    res.send("Auth Route Working");
});

router.post("/register", register);
router.post("/login", login);

module.exports = router;