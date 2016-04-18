var fs = require('fs');
var path = require('path');  
var argv = require('optimist')
    .usage('Usage: $0 [-r] -d target')
    .demand(['d'])
    .boolean('r')
    .options('d', {
        alias : 'directory',
        default : '.',
    })
    .options('r', {
        alias : 'recursive',
    })
    .argv
;

var target_dir = argv.directory;

var walk = function(argDir) {
  if (!fs.existsSync(argDir)) {
    console.log("Directory " + argDir + " is not exist!");
    process.exit(1);
  }

  var dirList = fs.readdirSync(argDir); 

  dirList.forEach(function(file) {
    var nfd_name = file;
    var nfc_name = file.normalize('NFC');
    var nfd_path = path.resolve(argDir + "/" + nfd_name);
    var nfc_path = path.resolve(argDir + "/" + nfc_name);

    var stat = fs.statSync(nfd_path);

    if(stat && stat.isDirectory()) {
      if(argv.recursive) {
        walk(nfd_path);  
      }
    }
    else {
    }

    if(nfd_name == nfc_name) {
      console.log(nfd_name + " [Skiped]");
    }
    else {
      console.log(nfd_name + " [Renamed] to '" + nfc_name + "'");
      fs.renameSync(nfd_path, nfc_path);
    }

    file = argDir + '/' + file;
  });
}

walk(target_dir);
