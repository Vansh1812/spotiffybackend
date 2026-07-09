const songs=require('../data/songs');
const getallsongs=(req,res)=>{
    res.json(songs);

}
const addsong=(req,res)=>{
const newsong=req.body;
songs.push(newsong);
res.status(201).json({
    message: "song added",
    song: newsong

});
};
module.exports={
    getallsongs,
    addsong
}