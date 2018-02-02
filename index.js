var rc = require("piswitch");
var express = require("express");

var app = express();
var off = false;

app.get('/', function(req, resp){
    var s = req.query.socket;
    toggleSocket(s, off);
    off = true;
    resp.send("socket "+ s + "on");
});

app.listen(8001);

function toggleSocket(s, off){
    var code = [];
    code["A"] = "0FFF0 0FFFF 0F";
    code["B"] = "0FFF0 F0FFF 0F";
    code["C"] = "0FFF0 FF0FF 0F";
    code["D"] = "0FFF0 FFF0F 0F";

    var setOff = off;

    var type = "tristate"

    rc.send(code, type, setOff);
}