const body = require('body-parser');
const express = require('express');

const app1 = express();
const app2 = express();
const app3 = express();
const app4 = express();
const app5 = express();

// Parse the request body as JSON
app1.use(body.json());
app2.use(body.json());
app3.use(body.json());
app4.use(body.json());
app5.use(body.json());

const handler = serverNum => (req, res) => {
  console.log(`server ${serverNum}`, req.method, req.url, req.body);
  res.send(`Hello from server ${serverNum}! ` + "Here is your percentage of luckiness today: " + (Math.random()*100) + "%\n");
};

// Only handle GET and POST requests
app1.get('*', handler(1)).post('*', handler(1));
app2.get('*', handler(2)).post('*', handler(2));
app3.get('*', handler(3)).post('*', handler(3));
app4.get('*', handler(4)).post('*', handler(4));
app5.get('*', handler(5)).post('*', handler(5));

app1.listen(3001);
app2.listen(3002);
app3.listen(3003);
app4.listen(3004);
app5.listen(3005);