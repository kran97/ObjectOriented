const fs  = require('fs');
const read = require('readline-sync');
const utils = require('./utility/stockAccUtil');

var data = fs.readFileSync('./json/stockInput.json','utf-8');
var content = JSON.parse(data);
var obj = new utils.stockAccount();
obj.buy(content);