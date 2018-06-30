
var fs = require("fs");
var handleDirectory = function(files) {
  files.forEach(function(file) {
    if (file.indexOf("jquery.flot")!==-1) {
      var js = fs.readFileSync("./node_modules/jquery-flot/" + file);
      fs.writeFileSync("./" + file.replace(".js","") + "_commonJS.js", "module.exports = function(jQuery) {" + js + "};");
    }
  });
};
if (fs.existsSync("./node_modules/jquery-flot")) {
  console.log("node modules in this folder");
  var files = fs.readdirSync("./node_modules/jquery-flot");
  handleDirectory(files);
}
if (fs.existsSync("../jquery-flot")) {
  
  console.log("flot in sibling folder");
  var files = fs.readdirSync("../jquery-flot");
  handleDirectory(files);
}


