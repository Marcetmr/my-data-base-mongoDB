

// Importaciones y set-up inicial

const { MongoClient } = require('mongodb');

require('dotenv').config();

const client = new MongoClient(process.env.MONGO_URI);

// Función asíncrona para conectar a la base de datos

async function connectDB() {

    try {

        await client.connect();

        console.log('Conexión exitosa a la base de datos');

        return client.db('task_database')

    }

    catch(err) {

        console.error('Error en la conexión a la base de datos', err);

        throw err;

    }

};

// Exportaciones

module.exports = connectDB;