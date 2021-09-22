const http = require("http");

const callback = (res) => {
    var body ="";

    res.setEncoding('utf-8');

    res.on('data' , (data) =>{
        body+= data;
        console.log(data);
    });
}

var req = http.get(process.argv[2], callback);
