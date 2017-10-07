/*!
 *
 *
 */

const fs = require('fs')
const http = require('http')
const port = 30000

const requestHandler = (request, response) => {
    /*
    var ts = (new Date()).getTime();

    while (((new Date()).getTime() - ts) < 5000) {

    }
    */
    response.json(request);
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    var pid = process.pid;
    if (err) {
        return console.log("something bad happened", err);
    }
    fs.writeFileSync("process.pid", pid);
    console.log(`server is listening on ${port} with pid ${pid}`);
})