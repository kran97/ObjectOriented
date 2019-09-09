/******************************************************************************
 * Execution    :   default node            terminal> node stockAccount.js
 * 
 * Purpose      :   To buy and sell stock from stock market JSON file and keep a
 *                  record of all the transactions of the user along with time of
 *                  transaction and maintaining a user portfolio containing all 
 *                  stocks bought.
 * 
 * @description
 * 
 * @file        :   stockAccount.js
 * @overview    :   To buy and sell stock from stock market JSON file and keep a
 *                  record of all the transactions of the user along with time of
 *                  transaction and maintaining a user portfolio containing all 
 *                  stocks bought.
 * @author      :   Karan Gupta
 * @version     :   1.0
 * @since       :   09-09-2019
*******************************************************************************/

const fs  = require('fs');                              //file-system
const read = require('readline-sync');                  //user input library
const utils = require('./utility/stockLinkedUtil');        //Utility file
const obj1 = [];
/**
 * @description : reading stock market file and parsing it and putting it in linked list
 */
var data = fs.readFileSync('./json/stockInput.json','utf-8');
var content = JSON.parse(data);
console.log(content);
var headMarket = new utils.node();
var temp1 = headMarket;
temp1.input(temp1, content);



/**
 * @description : reading in user's portfolio and parsing it
 */
var userData = fs.readFileSync('./json/userStockFile.json','utf-8');
var userContent = JSON.parse(userData);
var headPort = new utils.node();
var temp2 = headPort;
temp2.input(temp2, userContent);

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
            var tempMarket = headMarket;
            var tempPort = headPort;
            obj.buy(tempMarket, tempPort, obj1);
            break;
        case '2':
            var tempMarket = headMarket;
            var tempPort = headPort;
            obj.sell(tempMarket, tempPort, obj1);
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