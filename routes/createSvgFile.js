var fs = require('fs');

exports.post = function(req, res, next){
    var fname = "./views/individualSvgs/" + req.body.individualKey + ".ejs";
    var svg = req.body.svg;

    fs.open(fname, 'w+', function(err, fd) {
        if (err) {
            return console.error(err);
        }
        fs.writeFile(fname, svg, function(){
            if(err) throw err;
        })
        console.log("File opened successfully!");
    });


    //fs.open(fname, "w+",0644, function(err, file_handle) {
    //    if (!err) {
    //        fs.write(file_handle, svg, null, 'ascii', function(err, written) {
    //            if (!err) {
    //                console.log("Текст успешно записан в файл");
    //            } else {
    //                console.log("Произошла ошибка при записи");
    //            }
    //        });
    //    } else {
    //        console.log("Error to open file");
    //    }
    //});

    //console.log("svg: " + req.body.svg);
    //console.log("individualKey: " + req.body.individualKey);
}