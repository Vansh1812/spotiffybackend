require("dotenv").config();
const express = require("express");
const authroute=require("./routes/authroute");

const logger = require("./middleware/logger");
const requestTime = require("./middleware/requestTime");
const requestCounter = require("./middleware/requestCounter");
const songroute = require("./routes/songroute");
const connectDB = require("./config/db");

connectDB();
const app = express();

app.use(express.json());

app.use(logger);

app.use(requestTime);

app.use(requestCounter);

app.use("/songs", songroute);
app.use("/auth", authroute);

const PORT=process.env.PORT || 3000;
const MONGO_URI=process.env.MONGO_URI;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);

});