const fs = require('fs');
const read = require('readline-sync');
class regExpClass
{
    input()
    {
        var content = fs.readFileSync('./json/regExpInput.json','utf-8');
        var content1 = JSON.parse(content);
        var str = '';
        str = content1[0].statement;
        return str;
    }
    replace(str)
    {
        try{
            var name = read.question("Enter first name : ");
            if(!isNaN(name)) throw 'Name should not be a number'
            str = str.replace(/<<name>>/, name);

            var fName = read.question("Enter full name : ");
            if(!isNaN(name)) throw 'Name should not be a number'
            str = str.replace(/<<full name>>/, fName);

            var num = parseInt(read.question("Enter mobile number : "));
            if(isNaN(num)) throw 'It should be a number'
            if(num.toString().length < 10 || num.toString().length>10) throw 'length should be equal to 10'
            str = str.replace(/xxxxxxxxxx/, num);
            
            var dat = new Date();
            var date = dat.getDate() + "/" + dat.getMonth() + "/" +dat.getFullYear();
            str = str.replace(/01-01-2016/, date);
            return str;
        }
        catch (err)
        {
            console.log(err);
        }
    }
}
module.exports = {
    regExpClass
}