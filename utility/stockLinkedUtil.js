const fs = require('fs');
const read = require('readline-sync');
class node
{
    constructor()
    {
        this.name = null;
        this.price = 0;
        this.number = 0;
        this.next = null;
    }
    input(head, arr)
    {
        for(var i in arr)
        {
            if(head.name == null)
            {
                head.name = arr[0].name;
                head.price = arr[0].price;
                head.number = arr[0].number;
            }
            else
            {
                var temp = new node();
                temp.name = arr[i].name;
                temp.number = arr[i].number;
                temp.price = arr[i].price;
                head.next = temp;
                head = temp;
            }
        }
        return head;
    }
    del()
    {
        
    }
}
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
var x=0;
class stockAccount
{
    constructor()
    {
        this.name = '';
        this.number = 0;
        this.amount = 0;
    }
    buy(tempMarket, tempPort, obj1)
    {
        var tempM = tempMarket;
        var tempP = tempPort;
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
                // var price = parseInt(read.question('enter the price: '));
                // if (isNaN(price)) throw "invalid input"
                var flag=0;
                while(tempM.next!=null)
                {
                    if(name == tempM.name && number<=tempM.number)
                    {
                        var flag1=0;
                        while(tempP.next!=null)
                        {
                            if(name==tempP.name)
                            {
                                tempP.number+=number;
                                flag1 = 1;
                                break;
                            }
                            tempP = tempP.next;
                        }
                        if(flag1 == 0)
                        {
                            var tempPP = new node();
                            tempPP.name = name;
                            tempPP.number = number;
                            tempPP.price = tempM.price;
                            tempP.next = tempPP;
                            tempP = tempPP;
                        }
                        flag=1;
                        tempM.number-=number;
                    }
                    tempM = tempM.next;
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

        //transaction file writing for buying
        obj1[x] = new customStokeAcc();
        obj1[x].name = name;
        obj1[x].number = number;
        obj1[x].price = tempM.price;
        obj1[x].time = Date(Date.now());
        var outString = JSON.stringify(obj1, null, 2);
        fs.writeFileSync('./json/stockTransaction.json', outString);
        x++;

        //printing market and portfolio
        var tempMM = tempMarket;
        while(tempMM.next!=null)
        {
            console.log(tempMM.name + " " + tempMM.number + " " + tempMM.price);
            tempMM = tempMM.next;
        }
        console.log("");
        console.log("*********************");
        console.log("USER's PORTFOLIO");
        console.log("");
        var tempPPP = tempPort;
        while(tempPPP!=null)
        {
            console.log(tempPPP.name + " " + tempPPP.number + " " + tempPPP.price);
            tempPPP = tempPPP.next;
        }
    }
    sell(tempMarket, tempPort, obj1)
    {
        var numDelStock;
        var delName = read.question("Enter the stock you wanna sell : ");
        var tempP = tempPort;
        while(tempP!=null)
        {
            try{
                if(delName == tempP.name)
                {
                    numDelStock = parseInt(read.question("How much you want to sell? "));
                    try{
                        if(isNaN(numDelStock)) throw 'Please enter a number'
                        if(numDelStock>tempP.number) throw 'You do not have enough stocks'
                        tempP.number-=numDelStock;
                        var tempM = tempMarket;
                        while(tempM!=null)
                        {
                            if(delName == tempM.name)
                            {
                                tempM.number+=numDelStock;
                            }
                            tempM = tempM.next;
                        }
                    }
                    catch (err) {
                        console.log(err);
                    }
                    break;
                }
                else
                {
                    console.log("No such company stock found");
                }
            }
            catch (err) {
                console.log(err);
            }
            tempP = tempP.next;
        }

        //transaction file writing for selling
        obj1[x] = new customStokeAcc();
        obj1[x].name = delName;
        obj1[x].number = numDelStock;
        obj1[x].price = tempP.price;
        obj1[x].time = Date(Date.now());
        var outString = JSON.stringify(obj1, null, 2);
        fs.writeFileSync('./json/stockTransaction.json', outString);
        x++;

        //printing market and portfolio
        var tempMM = tempMarket;
        while(tempMM.next!=null)
        {
            console.log(tempMM.name + " " + tempMM.number + " " + tempMM.price);
            tempMM = tempMM.next;
        }
        console.log("");
        console.log("*********************");
        console.log("USER's PORTFOLIO");
        console.log("");
        var tempPPP = tempPort;
        while(tempPPP!=null)
        {
            console.log(tempPPP.name + " " + tempPPP.number + " " + tempPPP.price);
            tempPPP = tempPPP.next;
        }
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
    node,
    customStokeAcc,
    stockAccount
}