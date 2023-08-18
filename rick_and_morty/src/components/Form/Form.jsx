import { useState } from "react";
import validation from '../Validation/Validation';

const Form = ({ login }) => { // paso la fn login por props para poder ejecutarla dentro de la fn handleSubmit.

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {  // La fn handleChange registra cuando hay algún cambio dentro de los inputs, modifica el estado userData y valida dichos cambios.
    
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });

    setErrors(validation({  // Ejecuto la fn que valida y le paso por parámetro el Estado( userData: que es el obj donde guardo toda la info que ingresa el usuario). Deseo validad cada vez que ocurran cambios en tiempo real en el input(dentro de handleChange).
      ...userData,          // La fn validation va a retornar un obj. Si tengo una ejecución de función, eso sera = a lo que retorna dicha fn. Necesito que el obj que retorne la fn validation se me guarde en el estado errors.
      [event.target.name]: event.target.value   // Si sucede algún cambio, con esta línea le aviso que debe modificar alguna de sus propiedades
    }));                                        // en realidad lo que está retornanto la fn validation es un obj (que si encuentra algún error) que en la propiedad email o la propiedad password tengan msjs de error.
  };

  const handleSubmit = (event) => {
    event.preventDefault();         // Para que al hacer click en el botón Submit NO se recargue la página, ni se borre la info digitada por el usuario.
    login(userData);
  };

  return(
    <form onSubmit={handleSubmit}>  
      <label htmlFor='email'>Email:</label>
      <input type='email' name='email' value={userData.email} onChange={handleChange} />
      {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}  {/*Renderizado condicional: si existe un error en la propiedad email, muestro dicha propiedad (que es un msj de error)*/}
      <hr />

      <label htmlFor='password'>Password:</label>
      <input type='password' name='password' value={userData.password} onChange={handleChange} />
      {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
      <hr />

      <button>Submit</button>
    </form>
  );
};

export default Form;