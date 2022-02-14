//chiedere all'utente di inserire una parola

let parola = prompt("inserisci una parola")

//creare una funzione capace di capire se la parola inserita è palindroma
if ( parola === parola.split("").reverse().join("") ){
    console.log (" è palindroma")
} else {
    console.log(" non è palindroma")
}

