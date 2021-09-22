// path.extname
const fs = require('fs');
const path = require('path')

fs.readdir(process.argv[2], (err , files) => {

    if(err)
    return console.log(err);


    const ext = process.argv[3];
    files.forEach((file) => {
        let tab = file.split('.');

        if(tab[1]=== ext){
            console.log(file);
        
        }
    })

});