//var num_articulos= parseInt(prompt("numero de articulos que desea comprar"));
//for(var inicio=1; inicio<=num_articulos; inicio++){
  // var precio_articulo= parseInt(prompt("dame precio de articulo" + inicio))
   //var cantidad_articulo=parseInt(prompt("dame cantidad" + inicio))
   //console.log("producto"+ precio_articulo);
  //console.log("cantidad" + cantidad_articulo);
  //console.log (calcular_subtotal(precio_articulo,cantidad_articulos))
//}

// ciclo do while
var numero= parseInt(prompt("ingresa un numero"));
var x=1;
do{
  console.log(x)
  x= x + 1;

}while(x < numero);

// try catch

var numero2=7;
try{
    if(numero2 !=10) throw new Error("el numero no es 10");
    console.log("la ejecucion se hizo de manera correcta")
} catch (error){
    console.log(error.name,error.mensaje);
    
}
    

function calcular_subtotal(precio,cantidad){
    subtotal= (precio * cantidad)*1.19;
    return subtotal;
}