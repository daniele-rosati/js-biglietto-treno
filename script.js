// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Chiedi all'utente i chilometri e l'età


// Chiedi all'utente i chilometri da percorrere
const kilometers = parseFloat(prompt("Inserisci il numero di chilometri che vuoi percorrere:"));

// Chiedi all'utente l'età
const age = parseInt(prompt("Inserisci la tua età:"));

// Calcola il prezzo totale del viaggio
const ticketPricePerKm = 0.21;
let totalPrice = kilometers * ticketPricePerKm;

// Applica lo sconto per i minorenni e gli over 65
if (age < 18) {
    const discount = totalPrice * 0.2;
    totalPrice -= discount;
} else if (age >= 65) {
    const discount = totalPrice * 0.4;
    totalPrice -= discount;
}

// Formatta il prezzo finale
totalPrice = totalPrice.toFixed(2);

// Mostra il prezzo finale all'utente
alert("Il prezzo totale del viaggio è: " + totalPrice + " €.");
