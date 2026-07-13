
console.log("authroute.js loaded");
const express = require("express");

const router = express.Router();
router.get("/test", (req, res) => {
    res.send("Auth Route Working");
});

const {
    register,
    login
} = require("../controllers/authcontroller");

router.post("/register", register);

router.post("/login", login);

module.exports = router;