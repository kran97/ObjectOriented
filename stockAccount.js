/******************************************************************************
 * Execution    :   default node            terminal> node stockAccount.js
 * 
 * Purpose      :   To read input from JSON file and calculate the price of the
 *                  grocery item and writing the result in another JSON file
 * 
 * @description
 * 
 * @file        :   stockAccount.js
 * @overview    :   To read input from JSON file and calculate the price of the
 *                  grocery item and writing the result in another JSON file
 * @author      :   Karan Gupta
 * @version     :   1.0
 * @since       :   07-09-2019
*******************************************************************************/

const fs  = require('fs');                              //file-system
const read = require('readline-sync');                  //user input library
const utils = require('./utility/stockAccUtil');        //Utility file
const obj1 = [];
/**
 * @description : reading stock market file and parsing it
 */
var data = fs.readFileSync('./json/stockInput.json','utf-8');
var content = JSON.parse(data);
console.log(content);

/**
 * @description : reading in user's portfolio and parsing it
 */
var userData = fs.readFileSync('./json/userStockFile.json','utf-8');
var userContent = JSON.parse(userData);


var obj = new utils.stockAccount();
while(1)
{
    console.log("Press 1 for buying");
    console.log("Press 2 for selling");
    console.log("Press 3 for saving in files");
    console.log("Press 4 for print final report");
    console.log("Press any key for exit");
    var choice = read.question("Enter your choice : ");
    switch(choice)
    {
        case '1':
            obj.buy(content, userContent, obj1);
            break;
        case '2':
            obj.sell(content, userContent);
            break;
        case '3':
            obj.write(content, userContent);
            break;
        case '4':
            obj.print(content, userContent);
            break;
        default:
            process.exit();
            break;
    }
}