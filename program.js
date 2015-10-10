var http = require('http');

http.get(process.argv[2], function (response) {
    var streamResults =[];

    response.setEncoding('utf8');
    response.on('data',function(data){
        streamResults.push(data);
    });

    response.on('end',function(){
        var results = streamResults.join('');
        console.log(results.length);
        console.log(results);
    });
});