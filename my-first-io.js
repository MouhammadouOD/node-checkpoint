const fs = require('fs');

var data = fs.readFileSync(process.argv[2]);

var text = data.toString();

var tab = text.split('\n');

var lines = tab.length -1;

console.log(lines);

