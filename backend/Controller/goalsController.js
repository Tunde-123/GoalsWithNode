const Goal = require('../Model/goalModel')
const router = require('../Routes/GoalsRoutes')
const asyncHandler = require('express-async-handler')


const getGoals = asyncHandler(async(req, res) =>{

    const allgoals = await Goal.find()
    res.json(allgoals)
})

const setGoals = asyncHandler( async (req, res) =>{
    if(!req.body.name){
       res.status(400)
      throw new Error('Please enter the name field')
    }
    const goal = await Goal.create({
        name : req.body.name,
        age : req.body.age       
    }) 
    res.status(201).json(goal)
    console.log(req.body)
})

const  getGoalById = asyncHandler(async (req, res) =>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("Goals not found ")
    }
    
    res.json(goal)
})

const  updateGoals = asyncHandler(async (req, res) =>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("Goals not found ")
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id , req.body ,{new :true} )

    res.json(updatedGoal)
})

const deleteGoals = asyncHandler(async (req, res) =>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Request not Found')
    }
    const deletedGoal = await Goal.findByIdAndDelete(req.params.id)
    res.json(await Goal.find())
})

module.exports ={

    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
    getGoalById,
}