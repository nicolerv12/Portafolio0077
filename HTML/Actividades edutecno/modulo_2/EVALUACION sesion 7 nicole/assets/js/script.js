var opcion = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas")

//FUNCIONES

opcion = parseInt(opcion); 


switch (opcion) {
    case 1:
        
        var opcionBoletas = prompt(
            "Seleccione una opción:\n" +
            "1. Ver boleta\n" +
            "2. Pagar cuenta"
        );

        opcionBoletas = parseInt(opcionBoletas); 

        
        switch (opcionBoletas) {
            case 1:
                alert("Haga click aqui para descargar su boleta");
                break;
            case 2:
                alert("usted esta siendo trasferido.espere por favor...");
                
            
        }
        break;


        case 2:
            
            var opcionsenal = prompt(
                "Seleccione una opción:\n" +
                "1. Problemas con la senal\n" +
                "2. Problemas con las llamadas"
            );
    
            opcionsenal = parseInt(opcionsenal); 
    
            
            switch (opcionsenal) {
                case 1:
                    var respuesta= prompt("A continuacion escriba su solicitud")
                    alert(" Estimado usuario, su solicitud: tengo problemas con la senal en avenida siempre viva' ha sido ingresada con exito.Pronto sera contactado por uno de nuestro ejecutivos");
                    break;
                case 2:
                    var respuesta= prompt("A continuacion escriba su solicitud")
                    alert(" Estimado usuario, su solicitud: tengo problemas con la senal en avenida siempre viva' ha sido ingresada con exito.Pronto sera contactado por uno de nuestro ejecutivos");
                    
                    }
                    break;


                    case 3:
            
                    // Solicitar al usuario que escriba 'SI' o 'NO'
var respuesta = prompt("MENTEL tiene una oferta comercial acorde a tus necesidades!para conocer mas informacion y ser asesorado personalmente si quiere ser asesorado por un ejecutivo, escriba 'si' y un jecutivo te llamara. De lo contrario, escriba 'no'.");

// 
if (respuesta === 'si') {
    alert("Un ejecutivo se contactará con usted pronto.");
} else if (respuesta === 'no') {
    alert("Gracias por preferirnos nuestros servicios.");
} else {
    alert("Respuesta no válida. Por favor, escriba 'SI' o 'NO'.");
}
break;

           
    case 4:

  
    var consulta = prompt("A continuacion escriba su consulta:");

    alert("Estimado usuario, su consulta:'Quisiera saber por que no ha llegado mi producto codigo 1234' ha sdo ingresada con exito. Pronto sera contactado por unos de nuestros ejecutivos " + consulta);
    break;
 
    default:
    alert("La opción ingresada no es válida.Gracias por preferir nuestros servicios"); 
    }
