const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character';

const getCharById = async (req, res) => {
  try{
    const { id } = req.params; // NO hace falta parsear id a Number porque en la siguiente línea lo concateno con un string
    const { data } = await axios(`${URL}/${id}`);

    if(!data.name) throw new Error(`Faltan datos del personaje con ID: ${id}`); 
    const character = {
      id: data.id,
      status: data.status,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender
    }
    return res.status(200).json(character); // Pongo el return porque quiero que la respueta corte aquí

  } catch(error) { // La propiedad message del obj error, es donde recibimos el msj de error
    return error.message.includes('ID') ? res.status(404).send(error.message) : res.status(500).send(error.response.data.error);
    // console.log(error.response.data.error);
  }
};

module.exports = {
  getCharById
};
 