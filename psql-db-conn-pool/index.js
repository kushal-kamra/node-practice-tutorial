const { Pool } = require("pg");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/todos", async (req, res) => {
    res.setHeader("content-type", "application/json");

    const client = await pool.connect();
    client.query("begin");
    const result = await pool.query("select id, todo from todos");
    client.query("commit");
    client.release();

    res.send(JSON.stringify({result}));
});

app.listen(8080, () => console.log("listening on 8080"));

async function connect() {
    try {
        pool = new Pool({
            "host": "localhost",
            "user": "postgres",
            "password": "password",
            "database": "practice",
            "port": 5432,
            "max": 4
        });
    } catch(err) {
        console.log("err : ", err);
    }
}

connect();