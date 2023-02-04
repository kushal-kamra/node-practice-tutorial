const http = require("http");
const fs = require("fs");
const httpServer = http.createServer();

httpServer.on("listening", () => console.log("Listening..."));

httpServer.on("request", (req, res) => {
    if (req.url === '/') {
        res.end(fs.readFileSync("simple-uploader/index.html"));
        return;
    }

    if (req.url === '/upload') {
        const fileName = req.headers["file-name"];
        req.on("data", chunk => {
            console.log(`Received chunk of length ${chunk.length}`);
            fs.appendFileSync(fileName, chunk);
        });
        res.end("chunk uploaded!");
    }
});

httpServer.listen(8080); 