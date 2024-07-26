var regiones= ["Santiago","Antofagasta","vina del mar"]
// imprimir arreglo
console.log(regiones)
//obtiene un posicion especificq de un qrreglo
console.log(regiones[2])



// RECORRIENDO UN ARREGLO Y AGREGAMOS UNA CADENA
for (var i= 0; i< regiones.lenght; i++){
    console.log("nombre de la regios es:"+ regiones[i])
}
regiones.push("maule");
console.log(regiones);
console.log("que pasa");
regiones.pop();
console.log(regiones);
regiones.unshift("los lagos");

//recorremos un arrelo y hacemos una operacion
var precios=[802,910,1221,218,336]
for (var i= 0; i< regiones.lenght; i++){
    console.log(precios[i])
    console.log(precios[i]*1.19)
    }