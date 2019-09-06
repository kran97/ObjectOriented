const fs = require('fs');
class stock
{
    constructor()
    {
        this.stockName = '';
        this.totalPrice = 0;
    }
}
class stockDetails
{
    input(num)
    {
        var content = fs.readFileSync('./json/stockInput.json','utf-8');
        var parContent = JSON.parse(content);
        return parContent;
    }
    output(obj, num, content)
    {
        for(var i=0; i<num; i++)
        {
            obj[i] = new stock();
            obj[i].stockName = content[i].name;
            obj[i].totalPrice = content[i].price * content[i].number;
        }
        for(var i=0; i<num; i++)
        {
            console.log(obj[i].stockName + " : " + obj[i].totalPrice);
        }
        var outString = JSON.stringify(obj, null, 2);
        fs.writeFileSync('./json/stockOutput.json', outString);
    }
}
module.exports = {
    stock,
    stockDetails
}

/**
 * number of stocks
 * 
 */
