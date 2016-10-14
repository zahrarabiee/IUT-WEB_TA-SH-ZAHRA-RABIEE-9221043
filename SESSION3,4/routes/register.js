/**
 * Created by S551 on 10/11/2016.
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
    fs.readFile('./register.html',null , function (error,data)
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

    /*console.log('in post function');
     console.log(req.param('name'));
     console.log(req.param('email'));
     console.log(req.param('phonenumber'));
     res.redirect('/');*/


    var item={
        username:req.param('username'),
        email_address:req.param('email_add'),
        mobile:req.param('number'),
        password:req.param('password')
        //username:req.query.fullname.,
        //password:req.query.email_add
    };
    mongo.connect(url , function(err,db){
        assert.equal(null,err);
        db.collection('user-data').findOne({username:req.body.username} , function (error,doc){
            if(doc) {
                console.log("this existed in database");
                res.writeHeader(200, {"Content-Type": "text/html", });
                res.write("<html><body><script>alert('Sorry!This username has already existed,choose another username');</script></body>");
                res.end();
                //alert("this existed in database");
                //ar errorMessage = "Sorry!this uername existed,choose another one";
                //res.send(500, errorMessage);
                //req.setpar
                //res.redirect('/register');
                //res.end();
                //window.alert("Sorry!this username is existed in database, choose another one");
            }
            else {
                console.log("this is not in database");
                db.collection('user-data').insertOne(item,function (err, result) {
                    assert.equal(null,err);
                    console.log(item.username);
                    console.log(item.password);
                    console.log('item inserted');
                    db.close();
                    res.writeHeader(200, {"Content-Type": "text/html", });
                    res.write("<html><body><script>alert('You register successfully');</script></body>");
                    res.end();
                    //res.redirect('/');
            })
        }

        })

    })
})

module.exports = router;
