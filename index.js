var rc = require("./piswitch");

var code = [];
code["A"] = "0FFF0 0FFFF 0F";
code["B"] = "0FFF0 F0FFF 0F";
code["C"] = "0FFF0 FF0FF 0F";
code["D"] = "0FFF0 FFF0F 0F";

var off = false;


var type = "tristate"

rc.send(code, type, off);