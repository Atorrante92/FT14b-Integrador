const validation = (userData) => {  // Esta fn recibe como parámetro el estado userData
  const errors = {};                // Inicializo un obj vacío porque al final esta fn me debe retornar un obj. En este obj voy a ir guardando los errores que encuentre tanto en la propiedad email como en password.

  if(!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = 'El email ingresado NO es válido';  // Si la propiedad userData NO es un email, creo una propiedad en mi obj errors con un msj.
  }

  if(!userData.email) {  // userData.email.length === ''
    errors.email = 'Debe ingresar un email';
  }

  if(userData.email.length > 35) {
    errors.email = 'El email NO debe superar los 35 caracteres';
  }

  if(!/.*\d+.*/.test(userData.password)) {
    errors.password = 'La contraseña tiene que tener al menos un número';
  }

  if(userData.password.length < 6 || userData.password.length > 10) {
    errors.password = 'La contraseña debe tener entre 6 y 10 caracteres';
  }

  return errors;
};

export default validation;