import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const { id } = useParams(); //Es posible hacer Destructuring porque useParams() me entrega un objeto con la propiedad id (porque su ruta es: /detail/:id) . Así accedo a su valor.
  const [character, setCharacter] = useState({}); // La fn useState me entrega un array con dos elementos(un estado y la fn que modifica dicho estado) ===> characters = {}

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

  return(
    <div>
      { /* FORMA 1 (COERCIÓN DE DATOS)
        character && <div>
          <h2>{character.name}</h2>
          <h2>{character.status}</h2>
          <h2>{character.species}</h2>
          <h2>{character.gender}</h2>
          <h2>{character.origin?.name}</h2>
          <img src={character.image} alt=''/>
        </div> 
        
        FORMA 2 (OPERADOR TERNARIO) 

        character ? <div>
        <h2>{character.name}</h2>
        <h2>{character.status}</h2>
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
        <h2>{character.origin?.name}</h2>
        <img src={character.image} alt=''/>
        </div> : null  
        */
      }
      
      <h2>Name: {character?.name}</h2>
      <h2>Status: {character?.status}</h2>
      <h2>Species: {character?.species}</h2>
      <h2>Gender: {character?.gender}</h2>
      <h2>Origin: {character?.origin?.name}</h2>
      <img src={character?.image} alt={character.name}/>
    </div>
  );
};

export default Detail;