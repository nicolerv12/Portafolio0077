$(document).ready(function(){
    //ocultar y mostrar un texto
$("#palancabutton").click(function(){
$("#parrafo").toggle();
})

//metoo para cambiar e color un evento de mouse
$("#parrafo2").mouseenter(function(){
    $(this).css("background-color", "yellow");
}).mouseleave(function(){
$(this).css("background-color", "red");
})
//animar una caja
$("#animate").click(function(){
$("#box").animate({
    width:'200px', 
    height:'200x'},
},1000);
});
