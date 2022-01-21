

function precio_final(precio_original, descuento){
  const porcentaje_precio_con_descuento = 100 - descuento;
  const precio_con_descuento = (precio_original * porcentaje_precio_con_descuento) / 100;
  return precio_con_descuento;
}

function on_click_button_price_discount(){
  const input_price = document.getElementById("input_price");
  const price_value = input_price.value;

  const input_discount = document.getElementById("input_discount");
  const discount_value = input_discount.value;  
  
  const precio_con_descuento = precio_final(price_value, discount_value);

  //aqui agrego el texto del precio final que paga el cliente.
  const result_p = document.getElementById("result_price");
  result_p.innerText = "El precio final a pagar es: " + precio_con_descuento;
}



// console.log({
//   precio_original,
//   descuento,
//   porcentaje_precio_con_descuento,
//   precio_con_descuento
// })