const http = require('http');
//const data = require('./utils/data');
const { getCharById } = require('./controllers/getCharById.js');

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Con esta línea le damos permisos al FrontEnd de hacer peticiones (Permite la comunicación de al App de React con el Server)
  // if(req.url.includes('/rickandmorty/character')) {
    
  //   const id = req.url.split('/').at(-1);

  //   const characterFound = data.find((char) => {
  //     return char.id === +id;
  //   });

  //   if(characterFound) {
  //     res.writeHead(200, { 'Content-Type': 'application/json' });
  //     res.end(JSON.stringify(characterFound));
  //   } else {
  //     res.writeHead(404, { 'Content-Type': 'application/json' });
  //     res.end(JSON.stringify({ error: 'Character not found' }));
  //   }
  // }
  if(req.url.includes('/rickandmorty/character')) {
    
    const id = +req.url.split('/').at(-1); 

    getCharById(res, id);

  }
}).listen(3001, 'localhost');