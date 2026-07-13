
const songs = require("../data/songs");

const getAllSongs = (req, res) => {
    res.json(songs);
};

const getSongById = (req, res) => {
    const id = Number(req.params.id);

    const song = songs.find(song => song.id === id);

    if (!song) {
        return res.status(404).json({
            message: "Song not found"
        });
    }

    res.json(song);
};

const addSong = (req, res) => {
    const { id, name, artist } = req.body;

    if (!id || !name || !artist) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    songs.push({
        id,
        name,
        artist
    });

    res.status(201).json({
        message: "Song Added"
    });
};

const updateSong = (req, res) => {
    const id = Number(req.params.id);

    const song = songs.find(song => song.id === id);

    if (!song) {
        return res.status(404).json({
            message: "Song not found"
        });
    }

    song.name = req.body.name;
    song.artist = req.body.artist;

    res.json({
        message: "Song Updated",
        song
    });
};

const deleteSong = (req, res) => {
    const id = Number(req.params.id);

    const index = songs.findIndex(song => song.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Song not found"
        });
    }

    songs.splice(index, 1);

    res.json({
        message: "Song deleted successfully"
    });
};

module.exports = {
    getAllSongs,
    getSongById,
    addSong,
    updateSong,
    deleteSong
};
