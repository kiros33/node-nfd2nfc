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

/*
if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}
*/

var target_dir = argv.directory;

//console.log('exit');
//process.exit(1);

/*
fs.readdir(argDir, function(err, items) {
for(var i = 0; i < items.length; i++) {
    nfd_name = items[i];
    nfc_name = items[i].normalize('NFC');

    if(nfd_name == nfc_name) {
        console.log(nfd_name + " [Skiped]");
    }
    else {
        console.log(nfd_name + " [Renamed] to '" + nfc_name + "'");

        nfd_path = path.resolve(argDir + "/" + nfd_name);
        nfc_path = path.resolve(argDir + "/" + nfc_name);

//        fs.rename(nfd_path, nfc_path, function (err) {
//            if(err) throw err;
//            console.log('renamed complete');
//        });

        fs.renameSync(nfd_path, nfc_path);
    }
}
*/

var walk = function(argDir) {
  console.log("0000: " + argDir);

  var dirList = fs.readdirSync(argDir); 

  dirList.forEach(function(file) {
    var nfd_name = file;
    var nfc_name = file.normalize('NFC');
    var nfd_path = path.resolve(argDir + "/" + nfd_name);
    var nfc_path = path.resolve(argDir + "/" + nfc_name);

//    console.log("nfd_name: " + nfd_name);
//    console.log("nfc_name: " + nfc_name);
//    console.log("nfd_path: " + nfd_path);
//    console.log("nfc_path: " + nfc_path);

    var stat = fs.statSync(nfd_path);

    if(stat && stat.isDirectory()) {
      console.log("####: " + nfd_path);
      if(argv.recursive) {
        walk(nfd_path);  
      }
    }
    else {
      console.log("%%%%: " + nfd_path);
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
