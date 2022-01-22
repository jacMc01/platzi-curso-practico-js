
function calcularPromedio(lista){
  let sumaLista = 0;
  for(let i = 0; i < lista.length; i++){
  sumaLista = sumaLista + lista[i];
}


  //reduce va a recibir una funcion y permite sumar cada uno de los elementos
  // const sumaLista = lista.reduce(
  //   function(valorAcumulado = 0, nuevoElemento){
  //     return valorAcumulado + nuevoElemento;
  //   }
  // );

  //Formula de promedio e sigua a la suma del resultado del for entre la longitud de la lista
  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}