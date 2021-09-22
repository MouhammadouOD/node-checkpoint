const fs = require('fs');

fs.readFile(process.argv[2],'utf-8' , function callback (err , data) {
    if(err)
    return console.log(err)

    var tab = data.split('\n');
    var lines = tab.length -1;

    return console.log(lines)
});