const app = require("express")();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("hello!");
});

app.get("/stream", (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.write("data: " + "hello!\n\n");
    send(res);
});

let i = 0;
function send(res) {
    i++;
    res.write("data:" + `hello from ${port}! ${i}\n\n`);
    setTimeout(() => send(res), 1000);
}

app.listen(port);
console.log(`Listening on ${port}`);

// Run below in browser console to establish connection
// let sse = new EventSource("http://localhost:8080/stream");
// sse.onmessage = console.log;