const app = require("express")()

//alternative of above is following 2 lines:-
  //const express = require("express")
  //const app = express()

app.get("/", (req, res)=>{
    res.json({
        message:"Aman is a good boy",
    })
})

app.listen(2000, (req, res)=>{
    console.log("NodeJS project")
})