var fs = require('fs');
const dir = './src/static';
const file = fs.readdirSync(dir);
const hasCreateFileDir = './src/components';
const hasCreateFile = fs.readdirSync(hasCreateFileDir);

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

/**
 * 检索文件，不存在的新建文件
 */
files.forEach((val, index) => {
    val = val + ".js";
    if (!hasCreateFile.includes(val)) {
        fs.writeFile(`./src/components/${val}`, '/*auto create*/', (err) => {
            if (err) {
                throw err
            }
        });
    }
});