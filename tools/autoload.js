var fs = require('fs');
const dir = './src/static';
const file = fs.readdirSync(dir);

const reg = /\.html$/;
console.log('==========================开始写入文件======================\n')
var str = `/*这是自动写入的文件，不用配置*/\n`;
var files = [];
file.forEach(function(val, index) {
    if (val) {
        val = val.replace(reg, '');
        files.push(val);
        str = str + `import ${val} from './components/${val}.js'; \n`;
        console.log(`文件写入===> import ${val} from './components/${val}.js'`);
    }
});
str = str + `\n export default {${[...files]}}`;




fs.writeFile('./src/component.js', str, (err) => {
    if (err) {
        throw err
    }
    console.log('==========================写入完成======================\n')
});