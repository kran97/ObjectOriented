var util = require('./utility/deckUtility');
var arr1 = ["♣️", "♦️", "♥️", "♠️"];
var arr2 = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
var finalCards = util.deckOfCards(arr1, arr2);
for (var i = 0; i < 4; i++) {
    console.log("Player " + (i + 1) + " Cards are : ")
    console.log(finalCards[i]);
}