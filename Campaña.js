let numAleatorio = Math.floor(Math.random() * 11);
let cont = 0;

function adivinar() {

    let n = Number(document.getElementById("numero").value);
    let mensaje = document.getElementById("mensaje");

    if (isNaN(n)) {
        mensaje.innerText = "Formato numero incorrecto >:(";
        return;
    }

    if (n !== numAleatorio) {
        mensaje.innerText = "Numero incorrecto";
        cont++;
        return;
    }

    if(cont==0) mensaje.innerText="¡Correcto! y encima a la primera, vaya maquina.";
    else if(cont<=3) mensaje.innerText="¡Correcto! Buen trabajo.";
    else if(cont<=6) mensaje.innerText="Correcto... aunque te ha costado un poco.";
    else if(cont<=11) mensaje.innerText="Correcto, no se te da muy bien adivinar.";
    else mensaje.innerText="Correcto, tremenda cantidad de intentos.";

    document.getElementById("descargar").style.display = "block";
}

function descargar(){

let texto =
`-Mejoraré la bolsa mucho, con nuevos minijuegos como el uno, el póker, la ruleta de la suerte, el monopoly y apuestas a caballos.

-Un gran juego utilizando los paises de los roles de poder para simular el comercio global con las divisas de cada país y sus respectivos PIB y PIB per capita

-Estableceré y crearé una nueva religión del estado: El garrismo.

-Protegeré a las minorías del servidor (Canarios)

-Me aseguraré personalmente de crear el codigo para todo estos minijuegos

-Realizaré un referendum para decidir si Littencito puede volver

-Mi objetivo es que descubran el mundo de juegos y diversión del servidor.

-Vivan Los Garres y la Alianza de Virio`;

let blob = new Blob([texto], {type:"text/plain"});
let link = document.createElement("a");

link.href = URL.createObjectURL(blob);
link.download = "campaña.txt";
link.click();

}