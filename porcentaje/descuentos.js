

function precio_final(precio_original, descuento){
  const porcentaje_precio_con_descuento = 100 - descuento;
  const precio_con_descuento = (precio_original * porcentaje_precio_con_descuento) / 100;
  return precio_con_descuento;
}




// console.log({
//   precio_original,
//   descuento,
//   porcentaje_precio_con_descuento,
//   precio_con_descuento
// })