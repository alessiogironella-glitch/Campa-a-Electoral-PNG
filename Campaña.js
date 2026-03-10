let numAleatorio = Math.floor(Math.random()*11);
let cont = 0;

function adivinar(){

let n = Number(document.getElementById("numero").value);
let mensaje = document.getElementById("mensaje");

if(isNaN(n)){
mensaje.innerText="Formato numero incorrecto >:(";
return;
}

if(n!==numAleatorio){
mensaje.innerText="Numero incorrecto";
cont++;
return;
}

if(cont==0) mensaje.innerText="¡Correcto! y encima a la primera.";
else if(cont<=3) mensaje.innerText="¡Correcto!";
else if(cont<=6) mensaje.innerText="Correcto... aunque te ha costado.";
else if(cont<=11) mensaje.innerText="Correcto, no se te da muy bien.";
else mensaje.innerText="Correcto, tremenda cantidad de intentos.";

crearNotepad();

}

function crearNotepad(){

let texto=`-Mejoraré la bolsa mucho con nuevos minijuegos como el uno, el póker, apuestas a caballos y la ruleta de la suerte.

-Un gran juego utilizando los países de los roles de poder para simular el comercio global con su PIB y PIB per capita y sus respectivas divisas.

-Estableceré una nueva religión del estado: El garrismo, con nuevos roles para el canal de la iglesia.

-Protegeré a las minorías del servidor (Canarios)

-Me aseguraré personalmente de crear el código para todos estos minijuegos.

-Realizaré un referendum para decidir si Littencito puede volver.

-Mi objetivo es que los integrantes descubran el mundo de juegos del servidor.

-Vivan Los Garres y la Alianza de Virio`;

let ventana = document.createElement("div");
ventana.className="ventana";
ventana.style.left=Math.random()*400+"px";
ventana.style.top=Math.random()*200+"px";

ventana.innerHTML=`
<div class="barra">
<span>campaña.txt - Bloc de notas</span>
<button class="cerrar">X</button>
</div>
<textarea readonly>${texto}</textarea>
`;

document.getElementById("windows-area").appendChild(ventana);

let barra=ventana.querySelector(".barra");

let offsetX, offsetY, moviendo=false;

barra.addEventListener("mousedown",(e)=>{
moviendo=true;
offsetX=e.clientX-ventana.offsetLeft;
offsetY=e.clientY-ventana.offsetTop;
});

document.addEventListener("mousemove",(e)=>{
if(!moviendo) return;
ventana.style.left=(e.clientX-offsetX)+"px";
ventana.style.top=(e.clientY-offsetY)+"px";
});

document.addEventListener("mouseup",()=>{
moviendo=false;
});

document.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        event.preventDefault();
        adivinar();
    }

});

ventana.querySelector(".cerrar").onclick=()=>ventana.remove();


}
