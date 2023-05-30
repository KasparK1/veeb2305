const http = require("http");


const host = 'localhost';
const port = 8000;

let inimene = {
    eesnimi: 'Kaspar',
    perenimi: 'Kaasik',
    kasElus: true
}

let matk = {
    title: '123',
    imageUrl: '',
    description: '',
    participants: ['Kaspar']
}


const requestListener = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify(matk));
};


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});