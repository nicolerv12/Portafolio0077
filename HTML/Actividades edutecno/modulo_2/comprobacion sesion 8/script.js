
function mostrarMenu() {
    var opcion;
    while (true) {
     
      opcion = prompt(
        "Seleccione una opción:\n" +
        "1. televisores\n" +
        "2. celulares\n" +
        "3. electrodomesticos\n" +
        "4. Ayuda\n" +
        "5. Salir"
      );
  
     
      opcion = parseInt(opcion);
  
      switch (opcion) {
        case 1:
          alert("ver catalogo");
          break;
        case 2:
          alert("ver catalogo");
          break;
        case 3:
          alert("ver catalogo");
          break;
        case 4:
          alert("Mostrando ayuda...");
          break;
        case 5:
          alert("Saliendo del menú.");
          return; 
        
      }
    }
  }
  
 
  
  