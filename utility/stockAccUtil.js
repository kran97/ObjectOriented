const fs = require('fs');
const read = require('readline-sync');
class stockAccount
{
    constructor()
    {
        this.name = '';
        this.number = 0;
        this.amount = 0;
    }
    buy(content)
    {
        try{
            var numStock = read.question("Enter the number of stocks : ");
            if (isNaN(numStock)) throw "invalid input"
        }
        catch (err) {
            console.log(err);
        }
        for(var i =0; i<numStock; i++)
        {
            try{
            var name = read.question("Enter stock name : ");
            if (!isNaN(name)) throw "invalid input"
            var number = parseInt(read.question('enter the number of share: '));
            if (isNaN(number)) throw "invalid input"
            var price = parseInt(read.question('enter the price: '));
            if (isNaN(price)) throw "invalid input"
            
            content.push({
                "name" : name,
                "price" : price,
                "number" : number
            })
            }
            catch (err) {
                console.log(err);
            }
        }
        console.log(content);
    }
    sell(content)
    {
        var delName = read.question("Enter the ")
    }
}
module.exports = {
    stockAccount
}