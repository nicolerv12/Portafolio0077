//console.log("hola desde la consola js");
console.log("bienvenido a la calculadora basica");
alert("opciones: 1. suma, 2. resta, 3.multiplicacion, 4. division");
opcion= parseInt(prompt("escribe el numero de la opcion deseada"));
var a;
var b;
a= parseInt(prompt("ingresa un numero"));
b= parseInt(prompt("ingresa otro numero"));
if(a==0 && b==0){
    alert("los numeros son 0, no se puede hacer operaciones")
} else{
switch(Option){

 case 1:
total= suma(a,b);
alert("el resultado de la suma es " + total);
  break;
case 2:
total2= resta(a,b);
alert("el resultado de la resta es" + total2);
  break;
case 3:
total3= multiplicacion(a,b);
alert("el resultado de la multiplicacion es " + total3);
break;
case 4:
total4= division(a,b);
alert("el resultado de la division es " + total4);
default:
    alert("opcion no valida,leer correctamente las opciones");
    break;
}
}



function suma(a,b){
    resultado= a + b;
    return resultado;
}
function resta(a,b){
    resultado= a - b;
    return resultado;
}
function multiplicacion(a,b){
    resultado= a * b;
    return resultado;
}
function division(a,b){
    if(a>b){
    resultado= a / b;
}else{ //sino se cumple la condicion 
    
     resultado=0;

     }return resultado;
    }
