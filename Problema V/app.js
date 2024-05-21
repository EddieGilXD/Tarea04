function precioTotal(plato1, plato2, plato3, impuesto) {
    let precio1 = parseFloat(plato1);
    let precio2 = parseFloat(plato2);
    let precio3 = parseFloat(plato3);

    let totalPlatos = precio1 + precio2 + precio3;
    let totalDeCalculo = totalPlatos * impuesto;
    let subTotal = totalDeCalculo / 100;
    let total = parseFloat(subTotal);
    return total.toFixed(2);
}

let plato1 = prompt("Precio del plato 1");
let plato2 = prompt("Precio del plato 2");
let plato3 = prompt("Precio del plato 3");
let impuesto = prompt("Agrega el porcentaje del impuesto que debe ser cobrado: %");

let total = parseInt(precioTotal(plato1, plato2, plato3, impuesto))

alert("El total final seria de: " + total)

