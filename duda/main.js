
//chick 
function tocaSomChick(){
    document.querySelector("#som_tecla_chick").play();
}
document.querySelector(".tecla_chickhicks").onclick = tocaSomChick;

//cruz
function tocaSomCruz(){
    document.querySelector("#som_tecla_cruz").play();
}
document.querySelector(".tecla_cruzramirez").onclick = tocaSomCruz;

//carrosturbinados
function tocaSomCarros(){
    document.querySelector("#som_tecla_carrosturbinados").play();
}
document.querySelector(".tecla_carros").onclick = tocaSomCarros;

//flynn
function tocaSomFlynn(){
    document.querySelector("#som_tecla_flynn").play();
}
document.querySelector(".tecla_flynn").onclick = tocaSomFlynn;

//francesco
function tocaSomFrancesco(){
    document.querySelector("#som_tecla_francesco").play();
}
document.querySelector(".tecla_francesco").onclick = tocaSomFrancesco;

//rapunzel
function tocaSomRapunzel(){
    document.querySelector("#som_tecla_rapunzel").play();
}
document.querySelector(".tecla_rapunzel").onclick = tocaSomRapunzel;

//matte
function tocaSomMatte(){
    document.querySelector("#som_tecla_matte").play();
}
document.querySelector(".tecla_matte").onclick = tocaSomMatte;

//mcqueen
function tocaSomMcqueen(){
    document.querySelector("#som_tecla_mcqueen").play();
}
document.querySelector(".tecla_mcqueen").onclick = tocaSomMcqueen;

//bobesponja
function tocaSomBob(){
    document.querySelector("#som_tecla_bobesponja").play();
}
document.querySelector(".tecla_bobesponja").onclick = tocaSomBob;
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