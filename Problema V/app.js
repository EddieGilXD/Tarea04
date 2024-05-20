function precioTotal(plato1, plato2, plato3) {
    totalPlatos = plato1 + plato2 + plato3;
    totalDeCalculo = impuesto * totalPlatos;
    total = totalDeCalculo / 100;
    return total;
}

let plato1 = prompt("Precio del plato 1");
let plato2 = prompt("Precio del plato 2");
let plato3 = prompt("Precio del plato 3");
let impuesto = prompt("Agrega el porcentaje del impuesto que debe ser cobrado: %");



alert("El total final seria de: " + total)

