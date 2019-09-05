/******************************************************************************
 * Execution    :   default node            terminal> node dataManagement.js
 * 
 * Purpose      :   To read input from JSON file and calculate the price of the
 *                  grocery item and writing the result in another JSON file
 * 
 * @description
 * 
 * @file        :   dataManagement.js
 * @overview    :   To read input from JSON file and calculate the price of the
 *                  grocery item and writing the result in another JSON file
 * @author      :   Karan Gupta
 * @version     :   1.0
 * @since       :   04-09-2019
*******************************************************************************/

const util = require('./utility/dataManagUtility');
const fs = require('fs');
const read = require('readline-sync');
var obj = new util.dataManage();

var content = fs.readFileSync('./json/dataManagement.json', 'utf-8');
var grocery = JSON.parse(content);

var arr = obj.inventory();
console.log("Enter your choice of grocery : ");
console.log("0 for rice, 1 for pulses and 2 for wheat");
var n = parseInt(read.question(""));
try{
    if(n>2 || n<0) throw 'input must be between 0 and 2'
    console.log("price of ",grocery[n].name," is ",arr[n]);
}
catch(err){
    console.log(err);
}

obj.write(arr);