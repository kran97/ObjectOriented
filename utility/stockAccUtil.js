const fs = require('fs');
const read = require('readline-sync');
class customStokeAcc
{
    constructor()
    {
        this.name = '';
        this.number = 0;
        this.price = 0;
        this.time = null;
    }
}
class stockAccount
{
    constructor()
    {
        this.name = '';
        this.number = 0;
        this.amount = 0;
    }
    buy(content, userContent, obj1)
    {
        var numStock = parseInt(read.question("Enter the number of companies : "));
        try{
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
                var flag=0;
                for(var i in content)
                {
                    if(name == content[i].name && number<=content[i].number)
                    { 
                        for(var j in userContent)
                        {
                            if(name==userContent[j].name)
                            {
                                userContent[j].number+=number;
                                break;
                            }
                            else
                            {
                                userContent.push({
                                    "name" : name,
                                    "price" : price,
                                    "number" : number
                                })
                                break;
                            }
                        }
                        flag=1;
                        content[i].number-=number;
                    }
                }
                if(flag==0)
                {
                    console.log("No Such Stock");
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        var i=0;
        obj1[i] = new customStokeAcc();
        obj1[i].name = name;
        obj1[i].number = number;
        obj1[i].price = price;
        //var dat = new Date();
        obj1[i].time = Date(Date.now());
        var outString = JSON.stringify(obj1, null, 2);
        fs.writeFileSync('./json/stockTransaction.json', outString);
        i++;
        
        console.log(content);
        console.log("*********************");
        console.log("USER's PORTFOLIO");
        console.log(userContent);
    }
    sell(content, userContent)
    {
        var numDelStock;
        var delName = read.question("Enter the stock you wanna sell : ");
        for(var i in userContent)
        {
            try{
                if(delName == userContent[i].name)
                {
                    numDelStock = parseInt(read.question("How much you want to sell? "));
                    try{
                        if(isNaN(numDelStock)) throw 'Please enter a number'
                        if(numDelStock>userContent[i].number) throw 'You do not have enough stocks'
                        userContent[i].number-=numDelStock;
                        if(userContent[i].number == 0)
                        {
                            delete userContent[i];
                        }
                        for(var j in content)
                        {
                            if(delName == content[j].name)
                            {
                                content[j].number+=numDelStock;
                            }
                        }
                    }
                    catch (err) {
                        console.log(err);
                    }
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        console.log(content);
        console.log("*********************");
        console.log("USER's PORTFOLIO");
        console.log(userContent);
    }
    write(content, userContent)
    {
        /**
         * @description : Stock market file stringified and written
         */
        var outContent = JSON.stringify(content, null, 2);
        fs.writeFileSync('./json/stockInput.json', outContent);

        /**
         * @description : User portfolio file stringified and written
         */
        var outUserContent = JSON.stringify(userContent, null, 2);
        fs.writeFileSync('./json/userStockFile.json', outUserContent);
    }
    print(content, userContent)
    {
        console.log(content);
        console.log("*********************");
        console.log("USER's PORTFOLIO");
        console.log(userContent);
    }
}
module.exports = {
    customStokeAcc,
    stockAccount
}