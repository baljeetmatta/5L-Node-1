//path,os,events,fs,http

const EventLogger=require("./eventLogger");
const eventObj=new EventLogger();
eventObj.on("MessageSent",function(){

    console.log("Handled");
    
})

eventObj.log("Welcome to node");


// const EventEmitter =require("events");
// //console.log(x);
// const event=new EventEmitter();


// event.on("MessageSent",function(){
//     console.log("Envet messagesent rec");
    

// })

// const another=require("./another");
// another.logging("Checking for messages");

//Raise 
//event.emit("MessageSent");



//const fs=require("fs");
//let data=fs.readFileSync("./demo.txt","utf-8");
//console.log(data);
// fs.readFile("./demo.txt","utf-8",function(err,data){
//     if(err)
//      console.log("Error infile"+err)
//      else
// console.log(data);

// });




// const osObj=require("os");
// console.log(osObj.totalmem());

// const pathObj=require("path");
// //console.log(pathObj);
// let output= pathObj.parse(__filename);
// console.log(output);

//console.log(__filename);



// const x=require("./another")
// console.log(x);

// //x=1;
// //x('Welcome to node');
// x.logging("Welcome");
// x.testing("test");
// console.log("Hello");
