const multer = require("multer");

const storage = multer.diskStorage({

    destination:(req,file,cb)=>{

        cb(null,"uploads/songs");

    },

    filename:(req,file,cb)=>{

        cb(null,

            Date.now()+"-"+file.originalname

        );

    }

});

const fileFilter=(req,file,cb)=>{

    if(file.mimetype==="audio/mpeg"){

        cb(null,true);

    }

    else{

        cb(new Error("Only MP3 files allowed"));

    }

};

const upload=multer({

    storage,

    fileFilter

});

module.exports=upload;