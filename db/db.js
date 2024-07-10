const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Simon2018'    
});

connection.connect((err) => {
    if(err) {
        console.error('Error de conexion con base de datos: ', err);
        return;
    }
    console.log('Conexion exitosa');

    connection.query('CREATE DATABASE IF NOT EXISTS tienda', (err, results) => {
        if(err) {
            console.error('Error al crear la base de datos', err);
            return;
        }
        console.log("Base de datos creada");

        connection.changeUser({database: 'tienda'}, (err) => {
            if(err) {
                console.error('Error al cambiar a base de datos.', err);
                return;
            }

            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS products (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nombre VARCHAR(100) NOT NULL,
                    precio DOUBLE NOT NULL
                );
        `;

            connection.query(createTableQuery, (err, results) => {
                if(err) {
                    console.error('Error al crear la tabla', err);
                    return;
                }
                console.log('Tabla creada');
            })
        })
    })
})

module.exports = connection;