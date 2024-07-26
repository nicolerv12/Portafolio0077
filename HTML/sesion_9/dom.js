const titulo= document.getElementById("titulo"); 
const descripcion= document.getElementById("descripcion");
const botonAgregar=document.getElementById("botonAgregar");
const botonCambiar=document.getElementById("botonCambiar");

function agregarElemento() {
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "este es un nuevo párrafo agregado desde JS";
   //anadir una clase al nuevo elemento
    nuevoParrafo.classList.add("nuevo-elemento");
    //agregar el nuevo elemento al body
   document.body.appendChild(nuevoParrafo);
}

function cambiarValor() {
    descripcion.textContent = "aqui estuvo Roberto";
    descripcion.classList.add("resaltado");
    }
    
botonAgregar.addEventListener("click", agregarElemento);
botonCambiar.addEventListener("click", cambiarValor);