const express = require("express");
const router = express.Router();
const auth=require("../middleware/auth");
const upload=require("../middleware/upload");

const {
    getAllSongs,
    addSong,
    getSongById,
    updateSong,
    deleteSong
} = require("../controllers/songcontroller");

const validateSong = require("../middleware/validateSong");

router.get("/", getAllSongs);
router.post("/",auth, validateSong, addSong);
router.get("/:id", getSongById);
router.put("/:id", auth, updateSong);
router.delete("/:id", auth, deleteSong);
router.post("/upload", auth, upload.single("song"),
(req,res)=>{
    res.json({
        message:"song uplaoded successfully",
        file:req.file
    });
});

module.exports = router;