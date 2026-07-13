const express=require('express');
const router=express.Router();
const {getAllSongs, addSong, getSongById, updateSong, deleteSong}=require("../controllers/songcontroller");
router.get("/",getAllSongs);
const validateSong = require("../middleware/validateSong");
router.post("/",validateSong,addSong);
router.get("/:id",getSongById);
router.put("/:id",updateSong);
router.delete("/:id",deleteSong);

module.exports=router;
