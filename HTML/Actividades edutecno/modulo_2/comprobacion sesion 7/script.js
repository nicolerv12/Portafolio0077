var numero1 = prompt("Ingrese un número:");
var numero2 = prompt("Ingrese otro número:");

// Convertir los valores ingresados de texto a números
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

// Verificar cuál número es mayor o si son iguales
if (numero1 > numero2) {
    alert(numero1 + " es mayor que " + numero2);
} else if (numero2 > numero1) {
    alert(numero2 + " es mayor que " + numero1);
} else {
    alert(numero1 + " y " + numero2 + " son iguales");
}