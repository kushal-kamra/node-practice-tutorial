const app = require("express")();
// const cors = require("cors");

// app.use(cors({
//     origin: '*'
// }));

app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send("Served Successfully!");
});

app.listen(8888, () => console.log('Listening on Port 8888'));