

Proyecto: Aplicación de Lista de Tareas con Express.js y MongoDB

Objetivo

El propósito de este proyecto es desarrollar una API REST que permita a los usuarios gestionar una lista de tareas a través de Express.js y una base de datos MongoDB.

Pasos del proyecto:

1. Inicio del Proyecto:
Crea un nuevo directorio para el proyecto con el nombre my-data-base-mongoDB.

2. Instalación de Dependencias:
Inicia el proyecto usando npm init -y para crear el archivo package.json.

3. Configurar Variables de Entorno
Crea un archivo .env en el directorio raíz del proyecto y define las variables de entorno necesarias. Puedes encontrar un ejemplo en el archivo .env.example.

4. Iniciar la Base de Datos
Asegúrate de tener MongoDB instalado y en ejecución. La aplicación espera una conexión a la base de datos MongoDB. Puedes configurar la conexión en el archivo .env.

5. Iniciar la Aplicación
La aplicación se ejecutará en http://localhost:[PUERTO]. Abre tu navegador y visita esa dirección para acceder a la aplicación.

Uso de la API Localmente

La aplicación expone una API RESTful con las siguientes rutas:

GET /tasks: Obtiene todas las tareas.
POST /tasks: Agrega una nueva tarea.
PUT /tasks/:taskId: Actualiza una tarea existente.
DELETE /tasks/:taskId: Elimina una tarea.