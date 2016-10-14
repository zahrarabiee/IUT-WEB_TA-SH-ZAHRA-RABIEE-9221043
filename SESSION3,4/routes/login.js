/**
 * Created by S551 on 10/13/2016.
 */
var express = require('express');
var router = express.Router();
var http=require ('http');
var fs=require('fs');
var mongo = require('mongodb');
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';
var app = express();
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.readFile('./login.html',null , function (error,data)
    {
        if(error)
        {
            res.write("file not found")
        }
        else {
            res.write(data)
        }
        res.end();
    });

});
router.post('/submit',function(req,res,next){



   var item={
        username:req.param('username'),
        password:req.param('password')
        //username:req.query.fullname.,
        //password:req.query.email_add
    };
    mongo.connect(url , function(err,db){
        assert.equal(null,err);
        db.collection('user-data').findOne({username:req.body.username} , function (error,doc){
            if(doc) {
                db.collection('user-data').findOne({password:req.body.password} , function (error,docs) {
                    if (docs) {
                        console.log('you can log in successfully');
                        res.writeHeader(200, {"Content-Type": "text/html", });
                        res.write("<html><body><script>alert('you log in successfully');</script></body>");
                        res.end();
                        //res.redirect('/');
                    }
                    if (!docs) {
                        console.log('your password is not correct');
                        res.writeHeader(200, {"Content-Type": "text/html", });
                        res.write("<html><body><script>alert('Sorry!your password in not correct');</script></body>");
                        res.end();
                        //res.redirect('/login');
                    }
                })
            }
            else {
                console.log("this username is not in database");
                res.writeHeader(200, {"Content-Type": "text/html", });
                res.write("<html><body><script>alert('username and password in not correct');</script></body>");
                res.end();
                //res.redirect('/login');
                }
            })

        })

    })

module.exports = router;

