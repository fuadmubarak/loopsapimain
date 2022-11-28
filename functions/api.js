const express = require('express');
const serverless = require('serverless-http');

const app = express();

const router = express.Router();

router.get('/',(req, res)=> {
   
    res.json({
        "success":true,"data":{
            "Merch":[
            {
                "idpel":"1",
                "merchname":"PLN",
                "image":"pln.png"
            },
    
            {
                "idpel":"2",
                "merchname":"BPJS",
                "image":"bpjs.png"
            },
    
            {
                "idpel":"3",
                "merchname":"PAM",
                "image":"pam.png"
            }
        ]
        }
    });

});

app.use('/.netlify/functions/api', router)


module.exports.handler = serverless(app);