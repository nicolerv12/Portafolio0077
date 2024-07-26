let mochila = {
    //Propiedades del objeto
    color: "negro",
    tamano: "20cm",
    numero_bolsillos: 2,
    numeroCierres: 2,
    //metodos del objeto
    abrir_tapa: function() {
        console.log("La tapa de la mochila esta abierta");
    },
    cerrarTapa: function(){
        console.log("la tapa de la mochila esta cerrada");
    }
};
//accediendo a las  propiedes del objeto
console.log(mochila.color);
console.log(mochila.tamano);
//acciendo a los metodos del objeto
mochila.abrir_tapa();
mochila.cerrarTapa();
console.log(mochila);
