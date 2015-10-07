var fs = require('fs');
var filePath = process.argv[2];
var fileContents = fs.readFileSync(filePath).toString();

var numberOfLines = fileContents.split('\n').length;
console.log(numberOfLines-1);

