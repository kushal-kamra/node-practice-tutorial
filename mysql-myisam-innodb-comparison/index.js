const mysql = require('mysql2/promise');

async function connectMySqlDbMyisam() {
    try {
        const con = await mysql.createConnection({
            "host": "localhost",
            "port": 3306,
            "user": "root",
            "password": "password",
            "database": "test"
        });

        await con.beginTransaction();

        await con.query("INSERT INTO employees_myisam (name) values (?)",
            ["Kushal"]);

        await con.commit();

        await con.close();
        console.log(result);
    } catch(err) {
        console.log(err);
    }
}

connectMySqlDbMyisam();

async function connectMySqlMyinnodb() {
    try {
        const con = await mysql.createConnection({
            "host": "localhost",
            "port": 3306,
            "user": "root",
            "password": "password",
            "database": "test"
        });

        await con.beginTransaction();

        await con.query("INSERT INTO employees_innodb (name) values (?)",
            ["Kushal"]);

        await con.commit();

        await con.close();
        console.log(result);
    } catch(err) {
        console.log(err);
    }
}

connectMySqlMyinnodb();