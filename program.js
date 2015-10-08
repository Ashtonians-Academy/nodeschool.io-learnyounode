var fs = require('fs');
var dir = process.argv[2];
var extensionFilter = process.argv[3];

fs.readdir(dir, function (err, fileList){
    for(var i = 0; i < fileList.length; i++ )
    {
        if(fileList[i].split('.')[1] == extensionFilter)
            console.log(fileList[i]);
    }
});



