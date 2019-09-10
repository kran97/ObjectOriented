const assert = require('chai').assert;
const dataVar = require('../utility/dataManagUtility');
var obj = new dataVar.dataManage();
var testObj = obj.inventory();

describe('inventory', function(){
    it('It should be a number', function(){
        for(var i in testObj)
        {
            assert.typeOf(testObj[i], 'number');
        }
    })
    it('it should be greater than 0', function(){
        for(var i in testObj)
        {
            assert.isAbove(testObj[i], 0);
        }
        
    })
})