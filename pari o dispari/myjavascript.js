//chiedere all'utente se scegliere pari o dispari
const scelta = prompt("scegli pari o dispari");

//chiedere all'utente di scegliere un numero da 1 a 5
const userNumber = prompt("scegli un numero da 1 a 5");

//generare un numero random che vada da 1 a 5 per il computer
function getrandom(min,max) {
    min = Math.ceil(min);
    msx = Math.floor(max);
    return Math.floor(Math.random() * (max-min+1) + min);
}

const pcNumero = getrandom(1,5)