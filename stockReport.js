/******************************************************************************
 * Execution    :   default node            terminal> node stockReport.js
 * 
 * Purpose      :   To read input from JSON file and calculate the price of the
 *                  grocery item and writing the result in another JSON file
 * 
 * @description
 * 
 * @file        :   stockReport.js
 * @overview    :   To read input from JSON file and calculate the price of the
 *                  grocery item and writing the result in another JSON file
 * @author      :   Karan Gupta
 * @version     :   1.0
 * @since       :   06-09-2019
*******************************************************************************/

const stockUtils = require("./utility/stockUtility");
const read = require("readline-sync");
var obj1 = [];
var obj2 = new stockUtils.stockDetails();
var n = parseInt(read.question("Enter the number of stocks you'd like to see : "));
console.log();
try{
    if(n>=10 || isNaN(n) || n<0) throw 'Invalid Input'
    var content = obj2.input();
    obj2.output(obj1, n, content);
}
catch(err)
{
    console.log(err);
}
