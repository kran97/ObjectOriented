const fs = require('fs');
const read = require('readline-sync');
class regExpClass
{
    constructor()
    {
        //
    }
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
        var name = read.question("Enter first name : ");
        //if(nameRestriction.test)
        str = str.replace(/<<name>>/, name);
        var fName = read.question("Enter full name : ");
        str = str.replace(/<<full name>>/, fName);
        var num = read.question("Enter mobile number : ");
        str = str.replace(/xxxxxxxxxx/, num);
        var dat = new Date();
        var date = dat.getDate() + "/" + dat.getMonth() + "/" +dat.getFullYear();
        str = str.replace(/01-01-2016/, date);
        return str;
    }
}
module.exports = {
    regExpClass
}