const express = require('express');
const request = require('request');

const servers = ['http://localhost:3001', 'http://localhost:3002', 'http://localhost:3003', 'http://localhost:3004', 'http://localhost:3005' ];
let cur = 0;

const handler = (req, res) => {
  // Pipe the vanilla node HTTP request (a readable stream) into `request`
  // to the next server URL. Then, since `res` implements the writable stream
  // interface, you can just `pipe()` into `res`.
  
 
  req.pipe(request({ url: servers[cur] + req.url })).pipe(res);
  cur = (cur + 1) % servers.length;
};
const server = express().get('*', handler).post('*', handler);

server.listen(3000);