

// Importaciones y set-up inicial

const express = require('express');

const taskRouter = require('./src/routes/taskRoutes');

const connectDB = require('./db');

const dotenv = require('dotenv');

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

// Establecimiento de conexión a la base de datos

connectDB();

// JSON middleware

app.use(express.json());

// Configuración de las rutas

app.use('/tasks', taskRouter);

// Inicialización del servidor

app.listen(PORT, () => {

    console.log(`Servidor corriendo en http://localhost:${PORT}`);

});