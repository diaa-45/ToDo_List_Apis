const express=require("express");
const router=express.Router();
const ToDo=require("../models/TodoModel");
const asynchandler=require("express-async-handler")


router.get('/', asynchandler(
  async(req, res) => {
    const TodoList= await ToDo.find();
    res.status(200).send(TodoList);
    }
)); 


router.get('/:id' ,asynchandler(
  async(req,res)=>{
      const Task= await ToDo.findById(req.params.id);
      if(Task)
         res.status(200).send(Task);
      else
         res.status(404).send("task not found");
     }
));
  
  
router.post('/', asynchandler(
  async(req, res) => {
    const {name,description,status}=req.body;
    const newTask = await ToDo.create({
        name,
        description,
        status,
      });

    res.status(200).send(newTask);
    }
));

router.put('/:id', asynchandler(
  async(req, res) => {
     const Task= await ToDo.findByIdAndUpdate(req.params.id,{
       $set:{
         name:req.body.name,
         description:req.body.description,
         status: req.body.status,
       }
     }, {new: true});
     res.status(200).json(Task);
   }
));
  
router.delete('/:id', asynchandler(
  async(req, res) => {
      const Task= await ToDo.findById(req.params.id);
      if(Task){
        const Task= await ToDo.findByIdAndDelete(req.params.id);
        res.status(200).send(`Todo with ID ${req.params.id} has been deleted.`);
      }else
        res.status(404).send("Id not Found");
  }
));
  
module.exports=router;