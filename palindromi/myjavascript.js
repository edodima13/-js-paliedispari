//chiedere all'utente di inserire una parola
const parola = prompt("inserisci una parola")


//invertire parola
function invertita(parola) {
    return parola.split("").reverse().join("") 
    
}
console.log(invertita(parola))

//creare una funzione capace di capire se la parola inserita è palindroma
function  palindroma(parola) {
    const reverse = invertita(parola)

    if ( parola === reverse){
        return true
    } else {
        return false
    }
}

//stampare un messaggio di verifica per l'utente
if ( palindroma(parola) ){
    console.log("la parola inserita è palindroma")
}   else {
    console.log("la parola inserita non è palindroma")
}



