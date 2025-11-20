const app = require("express")()

//alternative of above is following 2 lines:-
  //const express = require("express")
  //const app = express()

app.get("/", (req, res)=>{
    res.json({
        message:"Aman is a good boy",
        query:"how about you?"
    })
})

app.get("/about", (req, res)=>{
    res.json({
        status:200,
        message:"we are in about page"
    })
})

app.get("/contact", (req, res)=>{
    res.json({
        message:"we are in contacts page"
    })
})

app.listen(3000, (req, res)=>{
    console.log("NodeJS project is running on port 3000")
})