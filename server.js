const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
   // console.log("Connection request received");
   if(req.url==="/")
   {
   res.write("Welcome to nodejs");
   res.end();
   }
   else if(req.url==="/about" || req.url==="/aboutus.html")
   {
   // res.write("About us page");
   // res.end();
    fs.readFile("./aboutus.html","utf-8",(err,data)=>{
        res.write(data);
        res.end();

    })


   }
   else if(req.url==="/style.css")
   { fs.readFile("./style.css","utf-8",(err,data)=>{
    res.write(data);
    res.end();

})

   }
   else if(req.url==="/script.js")
   { fs.readFile("./script.js","utf-8",(err,data)=>{
    res.write(data);
    res.end();

})

   }
   else
   res.end();
});
server.listen(3001);
// server.on("connection",(socket)=>{

//     console.log("Connection request received");

// })
