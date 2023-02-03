const xmpp = require("simple-xmpp");

xmpp.on("online", data => {
    console.log("Hey! You're online...");
    console.log(`Connected as ${data.jid.user}`);
});

xmpp.on("error", error => {
    console.log(`Something went wrong! ${error}`);
});

xmpp.on("chat", (from, message) => {
    console.log(`Got a message! ${message} from ${from}`);
});

function send() {
    setTimeout(send, 5000);
    xmpp.send("kushal@localhost", `hi! ${Date.now()}`);
}

xmpp.connect({
    "jid": "kushal@localhost",
    "password": "password",
    "host": "localhost",
    "port": 5222
});