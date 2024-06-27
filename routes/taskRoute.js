const express = require('express');
const taskRouter = express.Router();
const auth = require('../middleware/auth');
const taskController = require('../controllers/taskController');

taskRouter.use(auth);
taskRouter.get('/list', taskController.getTaskList);
taskRouter.post('/add', taskController.addTask);
taskRouter.delete('/remove/:id', taskController.deleteTask);
taskRouter.put('/update/:id', taskController.updateStatus);

module.exports = taskRouter;