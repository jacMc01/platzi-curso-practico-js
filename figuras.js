// Codigo del cuadrado


function perimetro_cuadrado(lado){
  return lado * 4;
}
function area_cuadrado(lado){
  return lado * lado;
}



// Codigo del triangulo

function perimetro_triangulo(lado_triangulo_1, lado_triangulo_2, base_triangulo){
  return lado_triangulo_1 + lado_triangulo_2 + base_triangulo;
}
function area_triangulo(base_triangulo,altura_triangulo){
  return (base_triangulo * altura_triangulo) / 2;
}



// Codigo del circulo

function diametro_circulo(radio){
  return radio * 2;
}

const pi = Math.PI;
function circunferencia_circulo(radio){
  //aqui llamamos la funcion de diametro dentro de la funcion
  const diametro = diametro_circulo(radio);
  return diametro * pi;
}
function area_circulo(radio){
  return (radio * radio) * pi;
}


// Aqui interactuamos con el HTML

//CUADRADO
function calcular_perimetro_cuadrado(){
  const input = document.getElementById("input_cuadrado");
  const value = input.value;

  const perimetro = perimetro_cuadrado(value);
  alert(perimetro);
}
function calcular_area_cuadrado(){
  const input = document.getElementById("input_cuadrado");
  const value = input.value;

  const area = perimetro_cuadrado(value);
  alert(area);
}

//TRIANGULO

function calcular_perimetro_triangulo(){
  const input_1 = document.getElementById("input_lado1_triangulo");
  const value_1 = Number(input_1.value);

  const input_2 = document.getElementById("input_lado2_triangulo");
  const value_2 = Number(input_2.value);

  const base = document.getElementById("input_base_triangulo");
  const value_3 = Number(base.value);

  const perimetro = perimetro_triangulo(value_1, value_2, value_3)
  alert("El perimetro del triangulo es: " + perimetro);
  
}
function calcular_area_triangulo(){
  const input_1 = document.getElementById("input_lado1_triangulo");
  const value_1 = Number(input_1.value);

  const input_2 = document.getElementById("input_lado2_triangulo");
  const value_2 = Number(input_2.value);

  const base = document.getElementById("input_base_triangulo");
  const value_3 = Number(base.value);

  const area = area_triangulo(value_1, value_2, value_3);
  alert("El area del triangulo es: " + area);
}

//CIRCULO

function calcular_perimetro_circulo(){
  const input = document.getElementById("input_radio_circulo");
  const value = Number(input.value);

  const perimetro = circunferencia_circulo(value);
  alert(perimetro);
}
function calcular_area_circulo(){
  const input = document.getElementById("input_radio_circulo");
  const value = Number(input.value);

  const area = area_circulo(value);
  alert(area);
}