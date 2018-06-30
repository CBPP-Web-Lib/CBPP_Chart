try {
  var fs = require("fs");
  var handleDirectory = function(files, address) {
    files.forEach(function(file) {
      if (file.indexOf("jquery.flot")!==-1) {
        var fileAddress = address + "/" + file;
        var js = fs.readFileSync(fileAddress,"utf-8");
        var dest = "./" + file.replace(".js","") + "_commonJS.js";
        fs.writeFileSync(dest, "module.exports = function(jQuery) {" + js + "};");
      }
    });
  };
  ["../jquery-flot","./node_modules/jquery-flot"].forEach(address=> {
    if (fs.existsSync(address)) {
      var files = fs.readdirSync(address);
      handleDirectory(files, address);
    }
  });
} catch (ex) {
  console.log(ex);
}


