var fs = require('fs');
var data = "难道又是七大姑她八大姨";
var writeStream = fs.createWriteStream('output.txt');
writeStream.write(data,'UTF8');//写入数据，但是是覆盖
//标记文件末尾？？？
writeStream.end();
//文件写入完成时
writeStream.on('finish',function(){
    console.log("写入完成");
});
writeStream.on('error',function(){
    console.log(err.stack);//???
});
console.log("程序执行完毕");