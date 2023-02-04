const app = require("express")();
const port = process.env.PORT || 3000;

app.get("/*", (req, res) => {
    res.send(`Served by ${port}`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

// For layer-4 tcp load balancer run
// haproxy -f tcp-layer4.cfg

// For layer-7 http load balancer run
// haproxy -f http-layer7.cfg