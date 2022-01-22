
function calcularMediaAritmetica(lista) {
  let sumaLista = 0;
  for(let i = 0; i < lista.length; i++){
  sumaLista = sumaLista + lista[i];
}
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

const lista1 = [
  100,700,
  200,
  500,
  400000000,
];

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function mediana_f(lista){
  // Recibe una lista en forma de String separada por comas
  
  // split es necesario para poder convertirlo en un objeto tipo Array
  lista = lista.split(",");

  // por default la funcion sort ordena considerando los elementos del
  // Array como si fueran string, para ello se usa una funcion anonima
  // para poder considerarlos como numeros y obtener el resultado deseado.
  lista.sort((a,b)=> a-b);

  // console.log(lista)


  // como parte del algoritmo para obtener la mediana, es necesario encontrar la mitad de la lista. Para ello tomamos la longitud del array y lo redondeamos.
  const mitadLista1 = parseInt(lista.length / 2);
  var mediana;
  
//  [0,1,2,3]
//  4 = 2

  // para determinar los valores que se van a usar en la mediana
  // es necesario saber si sera impar o par. ya que si es par
  // el resultado es el promedio de los numeros que estan en el centro
  // y si es impar el resutlado es el numero del centro.
  if (esPar(lista.length)) {
    const elemento1 = Number(lista[mitadLista1 - 1]);
    const elemento2 = Number(lista[mitadLista1]);
  
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
    
    mediana = promedioElemento1y2;
  } else {
    mediana = lista[mitadLista1];
  }

  return mediana

}


function calcularMediana(){

  lista = document.getElementById("Mediana").value
  
  var result = mediana_f(lista)
  console.log(result)
  var result_print = document.getElementById("result_mediana")
  result_print.innerText = "Resultado: " + result

}



