const app = require("express")();

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
    res.write("data:" + `hello! ${i}\n\n`);
    setTimeout(() => send(res), 1000);
}

app.listen(8080);
console.log("Listening on 8080");

// Run below in browser console to establish connection
// let sse = new EventSource("http://localhost:8080/stream");
// sse.onmessage = console.log;