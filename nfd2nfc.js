var fs = require('fs');
var path = require('path');  
var argv = require('optimist').argv;

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}

var target_dir = process.argv[2];

fs.readdir(target_dir, function(err, items) {
    for(var i = 0; i < items.length; i++) {
        nfd_name = items[i];
        nfc_name = items[i].normalize('NFC');

        if(nfd_name == nfc_name) {
        	console.log(nfd_name + " [Skiped]");
        }
        else {
            console.log(nfd_name + " [Renamed] to '" + nfc_name + "'");

            nfd_path = path.resolve(target_dir + "/" + nfd_name);
            nfc_path = path.resolve(target_dir + "/" + nfc_name);

/*
            fs.rename(nfd_path, nfc_path, function (err) {
                if(err) throw err;
                console.log('renamed complete');
            });
*/

            fs.renameSync(nfd_path, nfc_path);
        }
    }
});
