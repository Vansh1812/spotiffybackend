const express=require('express');
const app=express();
app.use(express.json());
const songroute=require("./routes/songroute");
app.use("/songs",songroute);
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);

});