/**
 * Created by S551 on 9/19/2016.
 */
var http = require('http')
    , url = require('url')
    , fs   = require('fs');
http.createServer(function(req, res) {
    console.log(req.url);
    var tmp = url.parse(req.url,true);
    console.log(tmp.pathname);
    if(tmp.pathname=='/') {

        fs.readFile('./session1.html',function(err,data) {
            res.writeHead(200,{'content-Type':'text/html','content-Length':data.length});
            res.end(data);

        })
    }
    else if(tmp.pathname=='/informationform')
    {
        res.writeHead(200,{'content-Type':'text/html'});
        var url_parts = url.parse(req.url, true);
        var name = 'Name:'+ url_parts.query.fullname;
        var email = 'email:'+ url_parts.query.email_add;
        var phnumber = 'phone number:'+ url_parts.query.number;
        res.write(name+"<br>");
        res.write(email+"<br>");
        res.write(phnumber+"<br>");
        res.end();
    }
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888');