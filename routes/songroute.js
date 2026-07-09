const express=require('express');
const router=express.Router();
const {getallsongs,addsong}=require("../controllers/songcontroller");
router.get("/",getallsongs);
router.post("/",addsong);
router.get("/:id",(req,res)=>{
    const songid=parseInt(req.params.id);
    const song=songs.find(s=>s.id===songid);
    if(song){
        res.json(song);
    }   
    else{
        res.status(404).json({message:"song not found"});
    }
    
});
module.exports=router;
