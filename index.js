// content of index.js
const fs = require('fs')
const http = require('http')
const port = 30000

const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('Hello Node.js Server! :-)  ----')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    fs.writeFileSync("process.pid", process.pid);
    console.log(process.pid,  `server is listening on ${port}`);
})