var mongoose = require("mongoose")
var articleModel = require("../model/articleModel");
var jwt = require('jsonwebtoken');


class Controller {
    static create(req,res){
        let category = req.body.category.split(" ")
        let articleObj = {
            type: req.body.type,
            content: req.body.content,
            category: category,
            author: mongoose.Types.ObjectId(req.body.author)
        }
        articleModel.create( articleObj , (err, data)=>{
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
    
    
    static get(req,res){
        articleModel.find({})
        .populate("author")
        .exec((err,data)=>{
            if(err){
                res
                .status(400)
                .json(err)
            }else{
                res
                .status(200)
                .json(data)
            }
        })
    }
    
    
    static getOne(req,res){
        articleModel.findOne({_id  : mongoose.Types.ObjectId(req.params.id)})
        .populate("author")
        .exec((err,data)=>{
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
    
    static getAuthor(req,res){
        articleModel.find({ author  : mongoose.Types.ObjectId(req.body.author)})
        .populate("author")
        .exec((err,data)=>{
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
    
    static getCategory(req,res){
        articleModel.find({ category  : req.body.category})
        .populate("author")
        .exec((err,data)=>{
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
    
    static updateOne(req,res){
        articleModel.updateOne({ _id: mongoose.Types.ObjectId(req.params.id )},{
            content: req.body.content
        },(err,changed)=>{
            if(err){
                res
                .status(500)
                ,json(err)
            }else{
                res
                .status(200)
                .json(changed)
            }
        })
    }
    
    static delete(req,res){
        articleModel.deleteOne({ _id: req.params.id },(err,changed)=>{
            if(err){
                res
                .status(500)
                .json(err)
            }else{
                res
                .status(200)
                .json(changed)
            }
        })
    }
}







module.exports = Controller