const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Configuración de la base de datos
const db = mysql.createConnection({
    host: 'db', // Nombre del servicio definido en docker-compose
    user: 'root',
    password: 'example',
    database: 'tasklist'
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos: ', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Endpoint para obtener tareas
app.get('/tasks', (req, res) => {
    db.query('SELECT * FROM tasks', (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Error al obtener tareas' });
        }
        res.json(results);
    });
});

// Endpoint para agregar una nueva tarea
app.post('/tasks', (req, res) => {
    const newTask = req.body.task; // Obtener la tarea del cuerpo de la solicitud

    // Agregar la tarea a la base de datos
    db.query('INSERT INTO tasks (task) VALUES (?)', [newTask], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Error al agregar la tarea' });
        }
        // Respuesta de éxito
        res.status(201).json({ message: 'Tarea agregada', taskId: results.insertId });
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
