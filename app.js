// app.js (Updated for CI/CD Test)
const http = require('http');

// แก้ไขบรรทัดนี้เพื่อให้เห็นความเปลี่ยนแปลงใน Pipeline
const MESSAGE = process.env.APP_MESSAGE || "Hello from the Automated Pipeline!";
const API_KEY = process.env.API_KEY || "UNSET_KEY";

const requestHandler = (request, response) => {
  console.log(`Request received!`);
  response.end(`
    Message: ${MESSAGE}
    API Key: ${API_KEY}
    Pod Name: ${process.env.HOSTNAME}
    \n`);
};

const server = http.createServer(requestHandler);

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});