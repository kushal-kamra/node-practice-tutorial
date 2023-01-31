const net = require("net");

const server = net.createServer(socket => {
    socket.write("Hello.");
    socket.on("data", data => {
        console.log(data);
        console.log(data.toString());
    });
});

server.listen(8080);

// telnet 127.0.0.1 8080