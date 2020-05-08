const express = require('express');
const { body } = require('express-validator');
const {Task} = require('./../models/task');
const { TODO } = require('./../libs/validation')
const {validateRequest  } =require('./../libs/request-validators');
const router = express.Router();

//create
router.post('/create', ...TODO.CreateTodo, validateRequest,(req,res)=>{
   const task = new Task(res.locals.data);
   task.save().then((doc)=> {
   res.send(doc);
   })
 });

//read
router.get('/all',(req,res) =>{
  Task.find().then((docs) =>{
    res.send(docs);
  }).catch((error) => {
    res.status(503).send({message: 'Service Unavailable. Try later'});
  })
  
}
)
router.get('/one',...TODO.GetTodo, validateRequest,(req,res) =>{
Task.findById(res.locals.data.id).then((doc)=> {
  if(!doc){
  return res.status(404).send({message: 'Todo not found'}); 
  }
  res.send(doc);
}).catch((error) => {
  res.status(503).send({message: 'Service Unavailable. Try later'});
})
})
//update

router.patch('/update/:id', ...TODO.UpdateTodo, validateRequest,(req,res) =>{
  Task.findByIdAndUpdate(req.params.id, {
    name:res.locals.data.name
  },{
    new:true
  }).then((doc)=>{
    if(!doc){
  return res.status(404).send({message: 'Todo not found'}); 
  }
    res.send(doc);
  }).catch((error) => {
    res.status(503).send({message: 'Service Unavailable. Try later'});
  })
})
//delete
router.delete('/delete/:id', ...TODO.DeleteTodo,validateRequest,(req,res)=>{
  Task.findByIdAndDelete(req.params.id).then((doc)=>{
    if(!doc){
      return res.status(404).send({message: 'Todo not found'}); 
      }
    console.log('Document deleted',doc);
    res.send({message: 'Todo successfully deleted'});
  }).catch((error) => {
    res.status(503).send({message: 'Service Unavailable. Try later'});
  })
})

exports. TodoRouter = router;
