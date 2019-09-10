/******************************************************************************
 * Execution    :   default node            terminal> node deckOfCards.js
 * 
 * Purpose      :   To distribute 9 cards to 4 players randomly.
 * 
 * @description
 * 
 * @file        :   deckOfCards.js
 * @overview    :   To distribute 9 cards to 4 players randomly. An array of two
 *                  dimension has been created holding all possible combination of
 *                  52 cards. Using random function they are shuffled.
 * @author      :   Karan Gupta
 * @version     :   1.0
 * @since       :   09-09-2019
*******************************************************************************/

var util = require('./utility/deckUtility');
var arr1 = ["♣️", "♦️", "♥️", "♠️"];
var arr2 = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
var finalCards = util.deckOfCards(arr1, arr2);
for (var i = 0; i < 4; i++) {
    console.log("Player " + (i + 1) + " Cards are : ")
    console.log(finalCards[i]);
}