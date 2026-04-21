const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

function homePage(res) {
  const filePath = path.join(__dirname, 'views', 'home.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) { res.writeHead(500); res.end('Error loading page'); return; }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

function apiRoute(res) {
  const data = {
    name: 'Ali',
    field: 'Computer Science',
    goal: 'Become a backend developer',
    message: 'Keep going, you are doing great,iam tired tired tired tired tired, ya rab zamalek ya5od el dawery'
  };
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data, null, 2));
}

function notFound(res) {
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end('<h1>404 Not Found</h1>');
}

const server = http.createServer((req, res) => {
  if (req.url === '/') homePage(res);
  else if (req.url === '/api') apiRoute(res);
  else notFound(res);
});

server.listen(PORT, () => {
  console.log('Server running at http://localhost:' + PORT);
});
