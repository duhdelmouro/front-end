
//chick 
function tocaSomChick(){
    document.querySelector("#som_").play();
}
document.querySelector(".tecla_chickhicks").onclick = tocaSomChick;

//cruz
function tocaSomCruz(){
    document.querySelector("#som_tecla_cruzramirez").play();
}
document.querySelector(".tecla_cruzramirez").onclick = tocaSomCruz;

//doc
function tocaSomDocHudson(){
    document.querySelector("#som_tecla_dochudson").play();
}
document.querySelector(".tecla_dochudson").onclick = tocaSomDocHudson;

//finn
function tocaSomFinn(){
    document.querySelector("#som_tecla_finn").play();
}
document.querySelector(".tecla_finn").onclick = tocaSomFinn;

//francesco
function tocaSomFrancesco(){
    document.querySelector("#som_tecla_francesco").play();
}
document.querySelector(".tecla_francesco").onclick = tocaSomFrancesco;

//holley
function tocaSomHolley(){
    document.querySelector("#som_tecla_holley").play();
}
document.querySelector(".tecla_holley").onclick = tocaSomHolley;

//batman
function tocaSomBatman(){
    document.querySelector("#som_tecla_batman").play();
}
document.querySelector(".tecla_batman").onclick = tocaSomBatman;

//ferro
function tocaSomFerro(){
    document.querySelector("#som_tecla_ferro").play();
}
document.querySelector(".tecla_ferro").onclick = tocaSomFerro;

//america
function tocaSomAmerica(){
    document.querySelector("#som_tecla_america").play();
}
document.querySelector(".tecla_america").onclick = tocaSomAmerica;
/*

function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
let lista = document.querySelectorAll(".tecla");
let contador = 0;
while(contador< lista.length){
    const efeito = lista[contador].classList[1];
    const idAudio = "#som_"+efeito;
    lista(contador).onclick = function(){
        tocaSom(idAudio);
    }
    contador++;
}*/