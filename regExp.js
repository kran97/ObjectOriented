/******************************************************************************
 * Execution    :   default node            terminal> node regExp.js
 * 
 * Purpose      :   To read input from JSON file and calculate the price of the
 *                  grocery item and writing the result in another JSON file
 * 
 * @description
 * 
 * @file        :   regExp.js
 * @overview    :   To read input from JSON file and calculate the price of the
 *                  grocery item and writing the result in another JSON file
 * @author      :   Karan Gupta
 * @version     :   1.0
 * @since       :   05-09-2019
*******************************************************************************/

const util = require('./utility/regExpUtility');
const fs = require('fs');
const obj = new util.regExpClass();

var str = '';
str = obj.input();
console.log(str);
str = obj.replace(str);
console.log("");
console.log(str);