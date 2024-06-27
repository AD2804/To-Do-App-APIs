const { error } = require('console');
const Task = require('../models/task');
const { Sequelize } = require('sequelize');

exports.getTaskList = async (req, res)=>{
    const user_id = req.user.id;
    try {
        const tasks = await Task.findAll({where: {userID: user_id}});
        res.json(tasks);
    } catch (error) {
        console.error('Error getting tasks:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.addTask = async (req, res)=>{
    const user_id = req.user.id;
    const { taskDescription , status = 'pending'} = req.body;
    try {
        const tasks = await Task.create( {userID: user_id, task: taskDescription, status: status});
        res.status(201).json({ message: "Task added successfully", tasks});
    } catch (error) {
        console.error('Error adding tasks:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.deleteTask = async (req, res) => {
    const user_id = req.user.id;
    const { id } = req.params;
    try {
        const tasks = await Task.findOne({where: {userID: user_id, id: id}})
        if (!tasks) {
            return res.status(404).json({ message: 'Task not found'});
        }

        await tasks.destroy({where: {id: id}})
        res.status(201).json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.error('Error deleting tasks:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

exports.updateStatus = async (req, res) => {
    const user_id = req.user.id;
    const { id } = req.params;
    const { status } = req.body;
    try {
        const tasks = await Task.findOne({where: {userID: user_id, id: id}})
        if (!tasks) {
            return res.status(404).json({ message: 'Task not found'});
        }

        tasks.status = status;
        await tasks.save();
        res.status(200).json({ message: 'Task updated successfully.'})
    } catch (error) {
        console.error('Error updating tasks:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}