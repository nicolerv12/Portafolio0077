$(document).ready(function(){
    //metodo para escuhar el evento tipo submit del formulario
    $("#simpleform").on("submit", function(event){
    
        event.preventDefault(); //prevenir el comportamiento normal del formulario
    
        let isvalid = true;
    let errorMessage ="";
    let successMessage ="";
//eliminar mensajes previos
    $('.error').remove;
    $("#forMessage").empty();

    //validcion del formulario
    const username= $("#username").val().trim();
    if (username === ""){
        isvalid = false;
        $("#username").after('<span class="error" > el nombre de usuario es obligatorio</span>');
    } else {
        const emailPattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (emailPattern.test(email)){
            isvalid=false;
            $("#email").after('<span class="error" >ingrese un email valido<')
        }
    }
// validacion de la contrasena
const password= $("#password").val().trim();
if (password === ""){
    isvalid = false;
    $("#password").after('<span class="error" >la contraseña es obligatoria</span>');
}
if (isvalid){
    successMessage= '<p class="success" >Formulario enviado correctamente</p>';
$("#forMessage").html(errorMessage);


}



    });


});