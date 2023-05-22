const express = require('express');
const app = express();
// const http = require('http');

let users = [
  {
    id: 1,
    user: 'josue',
  }, 
  {
    id: 2,
    user: 'chaina',
  },
]

app.get('/', (request, response) => {
  response.send('<h1>My first server with Express :)</h1>');
});
app.get('/api/users', (request, response) => {
  response.json(users);
})
// const app = http.createServer((request, response) => {
//   response.writeHead(200, {'Content-Type': 'application/json'});
//   response.end(JSON.stringify(users))
// });

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
})
// app.listen(PORT);
// console.log(`Server running at ${PORT}`);