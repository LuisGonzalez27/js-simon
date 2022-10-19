"user strict";

// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, 
// uno alla volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti 
// e quali dei numeri da indovinare sono stati individuati.

// contenitore dei numeri visualizati
const numeriVisti = document.getElementById('numeri');
// imposto quanti numeri si vedo in pagina
const numeriPagina = 5;
// questi vengo inseriti dentro un array
let numeriCasuali = [];

// ciclo per generare i 5 numeri random
while(numeriCasuali.length < numeriPagina){
    let numero = randomNumber(1,100);
    if(!numeriCasuali.includes(numero)){
        numeriCasuali.push(numero);
    }
    console.log(numero);
}
//inserisco i numeri random nel div
numeriVisti.innerHTML = numeriCasuali;

// parte un timer di 4 secondi
const timer = setTimeout(clear, 4000);
// per far scomparire i numeri uso la funzione clean
function clear(){
    numeriVisti.innerHTML = '';
}

// l'utente deve inserire i numeri
const numeriUtente = document.getElementById('numeriUtente');
// vengono messi in un array
const numeroInserito = [];
// pulsante per inviare il numero
const btn = document.getElementById('invia');

function inviaNumero(){
    if(numeroInserito.length < numeriPagina){
        let controllo = parseInt(numeriUtente.value);
        numeroInserito.push(controllo);
        console.log(numeroInserito);
    }else{
       btn.removeEventListener('click', inviaNumero); 
    }
}
btn.addEventListener('click', inviaNumero);

// const btnVerifica = document.getElementById('test');

// quali numeri sono sati indovinati
// function verficaNumero(){
//     if(numeroInserito.length == numeriVisti.length){
//         console.log('Riprova');
//     }
//     else{
//        numeroInserito.push(numeriUtente.value);
//     }
// }
// btnVerifica.addEventListener('click', verficaNumero);