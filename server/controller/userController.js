const userModel = require("../model/userModel");
var bcrpyt = require('bcrypt');
const jwt = require("jsonwebtoken");
var mongoose = require("mongoose")
var articleModel = require("../model/articleModel");

class Controller{
    static createUser(req,res){
        let saltRounds = 5;
        bcrpyt.hash(req.body.password, saltRounds, (err,hash)=>{
            if(err){
                console.log(err)
                res
                .status(500)
                .json({
                    msg: "failed to bcrpyt"
                });
            }else{
                userModel.create({
                    username : req.body.username,
                    password: hash
                },(err,data)=>{
                    if(err){
                        res
                        .status(500)
                        .json(err)
                    }else{
                        res
                        .status(200)
                        .json(data)
                    }
                })
            }
        })
    }

    static signIn(req,res){
        userModel.findOne({username : req.body.username},(err,data)=>{
            if(err){
                res
                .status(500)
                .json(err)
            }else{
                if(data !== null){
                    // console.log(data)
                    let hash = data.password;
                    let password = req.body.password;
                    bcrpyt.compare(password,hash,(err,same)=>{
                        if(same){
                            jwt.sign({
                                id: data._id,
                                username : data.username,
                                email: data.email
                            },"secret",(err,token)=>{
                                if(err){
                                    res
                                    .status(500)
                                    .json(err)
                                }else{
                                    res
                                    .json({
                                        token,
                                        id: data._id
                                    })
                                }
                            })
                        }else{
                            res
                            .status(401)
                            .json({
                                msg: "wrong password"
                            })
                        }
                    })
                }else{
                    res
                    .status(401)
                    .json({
                        msg: "user does not exist"
                    })
                }
            }
        })
    }
    

}



module.exports = Controller