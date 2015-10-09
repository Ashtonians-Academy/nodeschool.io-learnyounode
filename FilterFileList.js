var fs = require('fs');

module.exports = FilterFileList;

    function FilterFileList (dir, filter, callback) {

        fs.readdir(dir, function (err, fileList) {

            if (err)
                return callback(err);

            var results = [];

            for (var i = 0; i < fileList.length; i++) {
                if (fileList[i].split('.')[1] == filter)
                    results.push(fileList[i]);
            }

            callback(null, results);

        });
    }