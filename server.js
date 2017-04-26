"use restrict";
let express = require("express");
let app = express();

app.get('/api/whoami', (req, res) => {
    let lang = req.get('Accept-Language').split(',')[0];
    let agent = req.get('User-Agent');
    let [i, j] = [agent.indexOf('('), agent.indexOf(')')];
    let result = {
        ipaddress: req.ip,
        language: lang,
        software: agent.slice(i + 1, j)
    };
    res.json(result);
});

app.listen(process.env.PORT || 8080, () => console.log("app is running!"));