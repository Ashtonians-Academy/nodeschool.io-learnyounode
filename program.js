var fs = require('fs');
var filePath = process.argv[2];
fs.readFile(filePath, function (err,fileContents){
    var numberOfLines = fileContents.toString().split('\n').length;
    console.log(numberOfLines-1);
});



