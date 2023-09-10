const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const ToursModel = require("./models/tours.js")
const HomeModel = require("./models/home.js")
const StoriesModel = require("./models/stories.js");
const PlannerModel = require("./models/planner.js");


const app = express()

app.use(cors(
    {

        origin : ['https://trip-planner-neon.vercel.app'],
        methods : ['POST', 'GET'],
        credentials : true
    }
))
app.use(express.json())


// mongoose.connect("mongodb://127.0.0.1:27017/Trip-Planner")

mongoose.connect("mongodb+srv://explorenomadictrips:SRKS2003@cluster0.lu4bqm2.mongodb.net/Trip-Planner?retryWrites=true&w=majority")

app.get("/",(req,res)=>{
    res.json("hello")
})

app.get("/gettours", (req,res)=>{
    ToursModel.find()
    .then(tours => res.json(tours))
    .catch(err => res.json(err))
})

app.get("/gethomes", (req,res)=>{
    HomeModel.findOne({})
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

app.get("/getstories", (req,res)=>{
    StoriesModel.find()
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

app.post("/getplanner", (req,res)=>{
    const cityname = req.body.cityname;

    PlannerModel.findOne({cityname: cityname})
    .then(response => res.json(response))
    .catch(err => res.json(err))
})





app.listen(3001, ()=>{
    console.log("Server is running.")
})
