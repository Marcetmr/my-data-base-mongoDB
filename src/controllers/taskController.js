

// Importaciones y set-up inicial

const connectDB = require('../../db');

const { ObjectId } = require('mongodb');

let baseDeDatos;

let taskCollection;

// Función asíncrona para conectar a la base de datos

const connectToDatabase = async () => {

    baseDeDatos = await connectDB();

    taskCollection = baseDeDatos.collection('tasks');

};

// Llamada a la funcíon para conectar a la base de datos

connectToDatabase();

// Función asíncrona para obtener todas las tareas

const getAllTasks = async () => {

    try {

        const allTasks = await taskCollection.find().toArray();

        return allTasks;

    }

    catch (err) {

        console.error('Error al intentar enlistar las tareas:', err.message || err);

        throw err;

    }

};

// Función asíncrona para agregar una nueva tarea

const addTask = async (task) => {

    try {

        const newTask = await taskCollection.insertOne(task);

        return newTask;

    }

    catch (err) {

        console.error('Error al intentar crear nueva tarea:', err.message || err);

        throw err;

    }

};

// Función asíncrona para actualizar una tarea existente

const updateTask = async (id, data) => {

    try {

        const objectId = new ObjectId(id);

        const updateData = { $set: {... data } };

        const result = await taskCollection.updateOne({ _id: objectId }, updateData);

        return result;

    }

    catch (err) {

        console.error('Error al intentar actualizar tarea', err.message || err);

        throw err;

    }

};

// Función asíncrona para borrar tarea

const deleteTask = async (id) => {

    try {

        const objectId = new ObjectId(id);

        const deletedTask = await taskCollection.deleteOne({ _id: objectId });

        return deletedTask;

    }

    catch (err) {

        console.error('Error al intentar borrar tarea', err.message || err);

        throw err;

    }

};

// Objeto con operaciones CRUD para las tareas

const CRUD = {
    getAllTasks,
    addTask,
    updateTask,
    deleteTask,
};

// Exportaciones

module.exports = CRUD;