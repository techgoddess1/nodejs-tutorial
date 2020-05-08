const mongoose  = require('mongoose');
require('./../config');

const TaskSchema = new mongoose.Schema({
name: mongoose.SchemaTypes.String
}, {
    timestamps: true
}
);
 const Task= mongoose.model('Task',TaskSchema, 'tasks');

 const task = new Task({
 name:'Friday Clubbing'

 });
  
 task.save().then((doc) => {
     console.log(doc);
 })
 module.exports = {
     TaskSchema,
     Task
 }