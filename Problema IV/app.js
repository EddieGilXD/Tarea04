const usuario = prompt("Usuario: ");

if (usuario == "Administrador") {
  const contraseña = prompt("Contraseña: ");
  if (contraseña == null || contraseña == "" ) {
    alert("Cancelado");
  } else if (contraseña == "12345") {
    alert("Contraseña correcta");
  } else {
    alert("contraseña incorrecta");
  }
} else if (usuario == null || usuario == "") {
    alert("Cancelado")
} else {
    alert("No te conozco")
}
