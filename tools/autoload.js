var fs = require('fs');

fs.readdir('./src/static', function(err, file) {
    if (err) {
        return;
    }
    if (file) {
        var files = [];
        console.log("===========================读取文件============================");
        const reg = /\.html$/;
        file.forEach(function(val, index) {
            if (reg.exec(val)) {
                console.log('读取的文件为:' + val)
                files.push(val.replace(reg, ""));
            }
        });
        createFile(files);
        writeFile(files);
    }
});

function createFile(arr) {
    var str = "/*从这里开始写代码吧*/";
    arr.forEach(function(val, index) {
        fs.writeFile(`./src/components/${val}.js`, str, function(err) {
            if (err) {
                throw err
            }
        })
    });
}

function writeFile(arr) {
    console.log('=========================开始写入文件===========================');
    var str = "/*这是一个自动写入的文件*/";
    arr.forEach(function(val, index) {
        str = str + `\n import ${val} from './components/${val}.js' `;
        fs.writeFile('./src/component.js', str, function(err) {
            if (err) {
                throw err
            }
            console.log(`写入文件=> import ${val} from './components/${val}.js'`);
        })
    });
}