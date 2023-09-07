import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
//import React from 'react';

const EMAIL = 'afol@gmail.com';
const PASSWORD = '123456a';

function App() {
   const location = useLocation(); // Este Hook me da un obj con una propiedad llamada pathname
   const navigate = useNavigate();

   const [characters, setCharacters] = useState([]);

   const [access, setAccess] = useState(false);

   const login = (userData) => {
      if(userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);  
         navigate('/home');  // Si el email y la password son correctos, el acceso se habilita y me redirecciona a home. Si no agrego el navigate, luego de logearse quedo en la misma página.
      }
   };

   useEffect(() => {
      !access && navigate('/'); // si access está en false me mantiene en la ruta '/', es defir no puedo entrar a la app
   }, [access]);                // Si no hago la validación con useEffect el usuario puede ingresar al path del navegador, poner /home e ingresar (esto NO puede pasar)

   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = (id) => {
      const charactersFiltered = characters.filter((character) => {
         return character.id !== parseInt(id);
      });
      setCharacters(charactersFiltered)
   };

   return (
      <div className='App'>
         {
            location.pathname !== '/' ? <Nav onSearch={onSearch} /> : null // Si location.pathname no es '/', renderizo la NavBar, de lo contrario NO.
            // location.pathname !== '/' && <Nav onSearch={onSearch} /> Otra opción para ocultar la NavBar
         }
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>  {/*Al componente Form le paso por props la fn login*/}
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
         </Routes>
      </div>
   );
};

export default App;
