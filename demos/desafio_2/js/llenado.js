var aciertos=0;
var errores=0;
//--> Selección de palabra

var palabras = ["BOCA","CAMPEON","PALABRA","LENGUA","CIENCIAS","TERMO","PIZZA","TABLET","LUNES","LAPIZ","MARTES","MANTEL","SABADO","CUADRO","DOMINGO","TECLADO","VIERNES","CANDADO","PAPEL","SILLA"]
var i = Math.floor((Math.random()* palabras.length));
var palabra_usada = palabras [i];
console.log (palabra_usada);

//-->Impresion de guiones
var boton="";
let guioness = [];
function dibujaar_guion(){
    for(let i = 0; i < palabra_usada.length; i++){
        var content = document.querySelector("#guiones");
        guioness[i]=["_ "];
        document.getElementById('guiones').innerHTML=guioness.join('');
    }
    
}
dibujaar_guion();

//--> Escritura de letras
let arraybotones = document.querySelectorAll("button");

for( i=0;i<29; i++){
    arraybotones[i].addEventListener("click", teclaapretada);
}
function teclaapretada (event) {
    let boton = event.target.value;
    boton= boton.toUpperCase();
    btn=event.target;
    btn.disabled=true;
  //--> Letra en palabra mostrada

let adivino=false;
    for (var i=0; i<palabra_usada.length;i++){
        if (palabra_usada[i]==boton) {
            console.log ("si");
            guioness[i] = boton;
            console.log (guioness);
            document.getElementById('guiones').innerHTML=guioness.join('');
            adivino=true;
            aciertos++;
            console.log(aciertos);
        }
    }
 //Mostrar letras incorrectas
    
    let erradas = document.querySelector(".erradas");
    if (adivino==false) {
        erradas.insertAdjacentHTML("beforeend",`<span id="mal">${boton}</span>`);
        errores++;
    }
  // Redirecionamiento a paginas de ganar o perder
    if (aciertos==guioness.length){
        parent.location="ganado.html";
    }
    if (errores==7){
        parent.location="perdido.html";
    }
  //Dibujar cuerpo de personita
  let dibujo= document.querySelector ("#muneco");
  var src;
  src = errores;	
  var source = `./img/cuerpo0${src}.png`;
  dibujo.src = source;
}






