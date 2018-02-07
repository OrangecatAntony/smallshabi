var fs = require("fs");
var readerStream = fs.createReadStream("input.txt");//如果存在则不再创建
var writerStream = fs.createWriteStream("output.txt");
//管道读写操作，把input的内容写入到output，也是覆盖的
//写入流追加操作，这样不会覆盖var writerStream = fs.createWriteStream("output.txt",{'flags':'a'});
readerStream.pipe(writerStream);
console.log("程序执行完毕");