function Mochila( color,tamano,numero_bolsillos,numeroCierres)  {
    //propiedades
    this.color =  color;
    this.tamano= tamano;
    this.numero_bolsillos = numero_bolsillos;
    this.numeroCierres= numeroCierres;
    //metodos del objeto
    this.abrir_tapa =function() {
        console.log("La tapa de la mochila esta abierta");
    },
    this.cerrarTapa = function(){
        console.log("la tapa de la mochila esta cerrada");
    }
};

//creando instancias de objeto
let mochila1= new Mochila("negra","pequena",2,2);
let mochila2= new Mochila("roja","mediana",2,2);
let mochila3 = new Mochila("negra","grande",10,10);

// Acciendo las propiedades de las instancias
console.log(mochila1.color);
console.log(mochila2.color);
console.log(mochila3.color);

mochila2.abrir_tapa();
mochila1.cerrarTapa();