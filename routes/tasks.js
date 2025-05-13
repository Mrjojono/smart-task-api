const express = require('express');
const router = express.Router();
const task = require('../data/task.js');
const Client = require('../data/client.js');

router.get("/hello", (req, res) => {
    res.send("Task API");
    res.end();
})

router.post('/add',(req,res)=>{
    const data = req.body;
    const newTask = {
        id: task.length + 1,
        name: data.name,
        description: data.description,
        status: data.status,
        created_at: new Date().toISOString(),
    };
    task.push(newTask);
    res.status(201).json(task);
 })

router.get("/getTask",(req,res)=>{
    res.status(200).json(task);
})

router.get('cre/', (req,res)=>{
    
})

router.get("/tasks/:id",(req,res)=>{
    const id =  parseInt(req.params.id);
    const found = task.some(task => task.id === id);

    if(found){
        const taskId = task.filter(task => task.id === id);
        res.status(200).json(taskId);
        res.end();
    }else{
        res.status(404).json({message: "task not found"});
    }
})

router.put("/tasks/update/:id", (req,res)=>{
    const id = parseInt(req.params.id);
    if(task.some(task=>task.id === id)){
       const updateTask = req.body;
       task.forEach(task =>{
        if(task.id === id){
            task.name = updateTask.name ? updateTask.name : task.name;
            task.description = updateTask.description ? updateTask.description : task.description;
            task.status = updateTask.status ? updateTask.status : task.status;
            task.created_at = new Date().toISOString();
            res.status(200).json({msg : "task updated successfully",task});
        }else{
            res.status(404).json({msg: "task not found"});        }
       })
       
    }
})



router.delete('/delete/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const index = task.findIndex(t => t.id === id);
    if (index !== -1) {
        task.splice(index, 1);
        res.status(200).json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
})

module.exports = router;