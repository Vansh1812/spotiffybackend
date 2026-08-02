require("dotenv").config();
const express = require("express");

const connectDB = require("./config/db");

const logger = require("./middleware/logger");
const requestTime = require("./middleware/requestTime");
const requestCounter = require("./middleware/requestCounter");

const songroute = require("./routes/songroute");
const authroute = require("./routes/authroute");

const app = express();

connectDB();

app.use(express.json());

app.use(logger);
app.use(requestTime);
app.use(requestCounter);

app.use("/songs", songroute);
app.use("/auth", authroute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});