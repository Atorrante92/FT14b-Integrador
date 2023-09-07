const axios = require('axios');

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
  .then((response) => response.data)
  .then(({ name, gender, species, origin, image, status}) => {
    const character = {
      // id: id,
      // name: name,
      // gender: gender,
      // species: species,
      // origin: origin.name,
      // image: image,
      // status: status
      id,
      name,
      gender,
      species,
      origin,
      image,
      status
    }
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(character))
  })
  .catch((error) => {
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end(error.message)
  })
};

module.exports = {
  getCharById
};
 