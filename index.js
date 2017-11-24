/**
 * Created by Mohit Kumar on 11/24/2017.
 */
var express = require("express");
var jwt=require("jsonwebtoken");
const app= express();


app.post("/api/login",function (req,res) {

    //use bodyparser to fetch the login data
    const user={id:3}
  const token=jwt.sign(user,'my_secret_key');

    res.json({

        token:token
    })
});

app.get("/api/protected",ensuretoken,function (req,res) {

    jwt.verify(req.token,'my_secret_key',function (err,data) {

        if(err){
          res.json({
              err:err
          })
        }
        else{
            res.json({

                text:"my api is protected",
                data:data
            })
        }
    })



});

function ensuretoken(req,res,next) {

    const bearerHeader=req.headers["authorization"];
    if(typeof bearerHeader !== 'undefined'){

        const bearer=bearerHeader.split(" ");
        const bearerToken=bearer[1];
        req.token=bearerToken;
        next();
    }
    else
    {
        res.sendStatus(403)
    }

}

app.get("/api",function (req,res) {

    res.json({

        text:"my api"
    })
});

app.listen(3000,function () {
    console.log("App is listening server");
})