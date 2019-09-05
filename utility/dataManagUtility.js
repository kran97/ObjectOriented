const fs = require('fs');
class dataManage
{
    inventory()
    {
        var content = fs.readFileSync('./json/dataManagement.json', 'utf-8');
        var grocery = JSON.parse(content);
        var value = [];
        for (var i = 0; i < 3; i++)
        {
            value[i] = parseInt((grocery[i].weight) * (grocery[i].price));
        }
        return value;
    }
    write(arr)
    {
        fs.writeFileSync('./json/dataManagOutput.json', arr);
    }
}
module.exports = {
    dataManage
}