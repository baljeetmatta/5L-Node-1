

const EventEmitter =require("events");

const event=new EventEmitter();
function log(message)
{
    console.log(message);
    event.emit("MessageSent");
}
function test()
{
    console.log('Test called');

}
var testData="data";
//module.exports=log;
//module.exports=test;
module.exports.logging=log;
module.exports.testing=test;
module.exports.testData=testData;
//module.exports={logging:log,testing:test};
