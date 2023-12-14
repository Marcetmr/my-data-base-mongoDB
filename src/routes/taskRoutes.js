

// Importaciones y set-up inicial

const express = require('express');

const router = express.Router();

const taskController = require('../controllers/taskController');

// Ruta get para enlistar todas las tareas

router.get('/', async (req, res) => {

    const allTasks = await taskController.getAllTasks();

    res.json(allTasks);

});

// Ruta post para agregar una nueva tarea

router.post('/', async (req, res) => {

    const newTask = req.body;

    const result = await taskController.addTask(newTask);

    res.json(result);

});

// Ruta put para actualizar una tarea existente

router.put('/:taskId', async (req, res) => {

    const updatedTask = req.body;

    const result = await taskController.updateTask(req.params.taskId, updatedTask);

    res.json(result);
});

// Ruta para eliminar una tarea

router.delete('/:taskId', async (req, res) => {

    const deletedTask = await taskController.deleteTask(req.params.taskId);

    res.json(deletedTask);

});

// Exportaciones

module.exports = router;