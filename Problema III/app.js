let message;

login == "trabajador"  
    ? message ="Hola" 
    : login == "Dueño" 
        ? message = "Felicidades"
        : login == "" 
            ? message = "Sin Sesion" 
            : message = "";
/*La estructura de los operadores ternarios es: condicion ? true : falsde */