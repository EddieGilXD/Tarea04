function encontrarMinMax(array) {
    let min = array[0];
    let max = array[0];
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }
    
    return {min: min, max: max};
}

let cantidad = prompt("¿Cuántos números quiere ingresar en el array?");

let numeros = [];

for (let i = 0; i < cantidad; i++) {
    let numero = prompt("Ingrese el número:");
    numeros.push(numero);
}

let resultado = encontrarMinMax(numeros);

alert("El número más pequeño es: " + resultado.min);
alert("El número más grande es: " + resultado.max);
