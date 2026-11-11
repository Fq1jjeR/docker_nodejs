const http = require('http');
const port = process.env.PORT || 10000;

http.createServer((req, res) => {
  if (req.url === '/api/time') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ serverTime: new Date().toISOString() }));
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Node.js в Docker на Render работает!</h1><p><a href="/api/time">API: время сервера</a></p>');
  }
}).listen(port, '0.0.0.0', () => console.log(`Server listening on 0.0.0.0:${port}`));