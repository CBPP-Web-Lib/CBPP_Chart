
var fs = require("fs");
var files = fs.readdirSync("./node_modules/jquery-flot");
files.forEach(function(file) {
  if (file.indexOf("jquery.flot")!==-1) {
    var js = fs.readFileSync("./node_modules/jquery-flot/" + file);
    fs.writeFileSync("./node_modules/jquery-flot/" + file.replace(".js","") + "_commonJS.js", "module.exports = function(jQuery) {" + js + "};");
  }
});
