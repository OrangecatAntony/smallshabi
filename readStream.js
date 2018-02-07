var fs = require("fs");
var data = '';
var readStream = fs.createReadStream('input.txt');
readStream.setEncoding('UTF8');
//当有数据可读时，读数据
readStream.on('data',function(chunk){
    data += chunk;
});
//没有数据可读时，读出数据
readStream.on('end',function() {
    console.log(data);
});
//当发生错误时
readStream.on('error',function(){
    console.log(err.stack);
});
console.log("程序执行完毕");