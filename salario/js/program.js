var num1; 
var num2; 
var resultado;
var resultado2;
var resultado3;

function calc(){
  num1 =  parseFloat(document.getElementById("s1").value);
  num2 =  parseFloat(document.getElementById("d1").value);
  
  //document.getElementById("resultado").innerHTML = "Resultado: " + resultado;


  //inicio inss
  if (num1 <= 1302){
    
     resultado = num1 * 0.075;
     document.getElementById("resultado").innerHTML = "Resultado1: " + resultado;
     resultado2 = num1 - resultado;
     document.getElementById("resultado2").innerHTML = "Resultado2: " + resultado2;

  }
  
  

  else if (num1 >= 1302.01 && num1 <= 2571.29){
    
    resultado = num1 * 0.09;
    document.getElementById("resultado").innerHTML = "Resultado1: " + resultado;
    resultado2 = num1 - resultado;
    document.getElementById("resultado2").innerHTML = "Resultado2: " + resultado2;

  }
  
  
  else if (num1 >= 2571.30 && num1 <= 3856.94) {

     resultado = num1 * 0.12;
     document.getElementById("resultado").innerHTML = "Resultado1: " + resultado;
     resultado2 = num1 - resultado;
     document.getElementById("resultado2").innerHTML = "Resultado2: " + resultado2;

  }

  else if (num1 >= 3856.95 && num1 <= 7507.49){

     resultado = num1 * 0.14;
     document.getElementById("resultado").innerHTML = "Resultado1: " + resultado;
     resultado2 = num1 - resultado;
     document.getElementById("resultado2").innerHTML = "Resultado2: " + resultado2;

}

else {

}

//fim inss

//inicio irrf

if (num1 <= 1903.98) {

  document.getElementById("resultado3").innerHTML = "Resultado3: " + num1; 
  document.getElementById("resultado4").innerHTML = "Resultado4: " + 0.00;

}

else if (num1 >= 1903.99 && num1 <= 2826.65){

  resultado = num1 * 0.075;
  document.getElementById("resultado3").innerHTML = "Resultado3: " + resultado;
  resultado2 = num1 - resultado;
  document.getElementById("resultado4").innerHTML = "Resultado4: " + resultado2;

}

else if (num1 >= 2826.66 && num1 <= 3751.05){

  resultado = num1 * 0.15;
  document.getElementById("resultado3").innerHTML = "Resultado3: " + resultado;
  resultado2 = num1 - resultado;
  document.getElementById("resultado4").innerHTML = "Resultado4: " + resultado2;

}

else if (num1 >= 3751.06 && num1 <= 4664.68){

  resultado = num1 * 0.225;
  document.getElementById("resultado3").innerHTML = "Resultado3: " + resultado;
  resultado2 = num1 - resultado;
  document.getElementById("resultado4").innerHTML = "Resultado4: " + resultado2;

}

else{

  resultado = num1 * 0.275;
  document.getElementById("resultado3").innerHTML = "Resultado3: " + resultado;
  resultado2 = num1 - resultado;
  document.getElementById("resultado4").innerHTML = "Resultado4: " + resultado2;

}

//fim irrf

}


//function calc2(){
  //var resultado2 = num1 * 0.02;
  //document.getElementById("resultado2").innerHTML = "Resultado2: " + resultado2;
//}

function calc3(){
  resultado3 = num1 * 0.06;
  document.getElementById("resultado5").innerHTML = "Resultado5: " + resultado3;
  resultado3 = num1 - resultado3;
  document.getElementById("resultado6").innerHTML = "onibus: " + resultado2;
}




/*
function multiplicar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 * num2;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
  }
  */