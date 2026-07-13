const mongoose=require("mongoose");
const songSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true   
    },
    artist:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
}
});
module.exports=mongoose.model("Song",songSchema);