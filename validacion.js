//Haz tú validación en javascript acá

var nombre= document.querySelector("#nombre_contacto");
nombre.addEventListener("change",valor_n);
function valor_n (event) {
    var nombre_2 = event.target.value;
    console.log(nombre_2);
}
var correo= document.querySelector ("#email_contacto");
correo.addEventListener("change",valor_c);
function valor_c (event) {
    var correo_2 = event.target.value;
    console.log(correo_2);
}
var asunto= document.querySelector ("#asunto_contacto");
asunto.addEventListener("change",valor_a);
function valor_a (event) {
    var asunto_2 = event.target.value;
    console.log(asunto_2);
}
var mensaje= document.querySelector ("#mensaje_contacto");
mensaje.addEventListener("change",valor_m);
function valor_m (event) {
    var mensaje_2 = event.target.value;
    console.log(mensaje_2);
}
var boton= document.querySelector (".boton_contacto");

mensaje.addEventListener ("change", activar_boton);

function activar_boton (){
if (nombre === "" && correo=== "" && asunto === "" && mensaje === "") {
    boton.disabled = true;
}   else {
    boton.disabled = false;
}
let i = mensaje.length;
console.log (i);
console.log (mensaje);
if (i > 3) {
    alert("El mensaje debe tener menos de 300 caracteres");
}
}

boton.addEventListener ("click", validar_formulario);
function validar_formulario() {
    if (nombre.length > 5) {
        console.log("esta andando");
        alert("El nombre debe tener menos de 50 caracteres");
    }
}