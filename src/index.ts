let precio: number = 450.5;
let descuento: number = 0.1;

document.getElementById("precio").innerHTML =
  "El precio del producto es " + precio;
document.getElementById("descuento").innerHTML =
  "El descuento es del " + descuento * 100 + "%";

document.getElementById("precioDescuento").innerHTML =
  "El precio con descuento es " + (precio - precio * descuento);
