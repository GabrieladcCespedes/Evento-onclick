/*Gabriela Céspedes*/

/*La funcion cambiarText, cambia el texto "Login" del boton btn-login cada que
se hace click en el por el texto "Logout" y asi viceversa si el texto del boton 
es "Logout" se camnbia por "Login" */
function cambiarText(){
    var text = document.getElementById("btn-login")
    if (text.innerHTML === "Login"){
        text.innerHTML = "Logout";
    } else{
        text.innerHTML = "Login";
    }
}
/*La funcion removeBtn remueve un boton de la pagina al hacer click en el */
function removeBtn(element){
    element.remove();
}
/*La funcion alertLikes muestra un mensaje de alerta avisando que acabas 
de darle like*/
function alertLikes(boton){ 
    alert("This page says Ninja was liked");

}
