require('dotenv').config()
function validateInputRequest(req, res, next) {
    if(!req.body.text ) { // check for input validation
        return res.status(400).json({
           message: 'Invalid input'
        })
    } 
    return next();
}

function PostHandler(req, res, next) {
    
    var aylien = require("aylien_textapi");
    // Aylien API credentias load app_id and app_key from .env file
    // Please make sure to carate an account in aylian and obtain your own app_id and app_key
    // then create a .env file and set it.
    var textapi = new aylien({
        application_id: process.env.APP_ID,
        application_key: process.env.APP_KEY
    });
    textapi.sentiment({
      'url': req.body.text
    }, function(error, response) {
        res.send(response)
    }); 
 
}


//set aylien api credentials

const aylienApi = new aylien({

    application_id: "fbc017dc",
    application_key: "2fd321e518749e8c593894ffa3e37eb4"
});

const someData ={

    url: articleUrl
};


exports.validateInputRequest = validateInputRequest;
exports.PostHandler = PostHandler;
