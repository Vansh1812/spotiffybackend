const validateSong = (req, res, next) => {

    const { id, name, artist } = req.body;

    if (!id || !name || !artist) {

        return res.status(400).json({
            message: "All fields are required"
        });

    }

    next();

};

module.exports = validateSong;