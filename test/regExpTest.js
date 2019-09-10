const assert = require('chai').assert;
const dataVar = require('../utility/regExpUtility');
var obj = new dataVar.regExpClass();
var testObj = obj.input();

describe('input', function(){
    it('Input should be a string', function(){
        assert.typeOf(testObj, 'string');
    })
    it('Function works fine', function(){
        assert.isOk(testObj);
    })
})