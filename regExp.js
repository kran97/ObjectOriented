const util = require('./utility/regExpUtility');
const fs = require('fs');
const obj = new util.regExpClass();

var str = '';
str = obj.input();
console.log(str);
str = obj.replace(str);
console.log("");
console.log(str);