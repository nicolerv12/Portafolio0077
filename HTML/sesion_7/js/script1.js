//console.log("hola desde la consola js");
console.log("bienvenido a la calculadora basica")
var a;
var b;
var suma;
//a=90331;
a= parseInt(prompt("ingresa un numero"));
//b=4233324;
b= parseInt(prompt("ingresa otro numero"));
total= suma(a,b);
alert("el resultado de la suma es " + total);
total2= resta(a,b);
alert("el resultado de la resta es" + total2);
total3= multiplicacion(a,b);
alert("el resultado de la multiplicacion es " + total3);
total4= division(a,b);
alert("el resultado de la division es " + total4);

if (total== 0){
alert("operacion vacia")
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
