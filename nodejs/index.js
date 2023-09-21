const express = require('express');
const mysql = require('mysql2');
const faker = require('faker')

const app = express();
const port = 3000

const config = {
    host: 'mysql',
    user: 'fullcycle',
    password: 'fullcycle3',
    database: 'fullcycle',
    waitForConnections: true
};


app.get('/', (req, res) => {
    const name = faker.name.findName()
    const sql = `INSERT INTO people (name) VALUES ('${name}')`;

    let db = mysql.createConnection(config);

    db.query(sql, (err, result) => {
    if (err) {
        console.error('Error inserting into database:', err);
    } else {
        console.log('Record inserted into database');
    }
    });

    db.query('SELECT name FROM people', (err, rows) => {
    if (err) {
        console.error('Error fetching data from database:', err);
    } else {
        const names = rows.map((row) => row.name);
        const response = `<h1>Full Cycle Rocks!</h1><ul>${names.map((name) => `<li>${name}</li>`).join('')}</ul>`;
        res.send(response);
    }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
