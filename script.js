// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Chiedi all'utente i chilometri e l'età
var chilometri = parseFloat(prompt("Inserisci il numero di chilometri che vuoi percorrere:"));
var eta = parseInt(prompt("Inserisci la tua età:"));

function calcolaPrezzoViaggio(chilometri, eta) {
    // Verifica che i chilometri siano un numero positivo
    if (chilometri <= 0) {
        return "Il numero di chilometri deve essere un numero positivo.";
    }

    // Calcola il prezzo del biglietto in base ai chilometri
    var prezzoBase = chilometri * 0.21;

    // Calcola lo sconto in base all'età
    var scontoPercentuale = 0;
    if (eta < 18) {
        scontoPercentuale = 20;
    } else if (eta >= 65) {
        scontoPercentuale = 40;
    }

    // Calcola il prezzo scontato
    var prezzoScontato = prezzoBase - (prezzoBase * (scontoPercentuale / 100));

    // Formatta il prezzo finale con massimo due decimali
    var prezzoFinale = prezzoScontato.toFixed(2);

    // Restituisci il prezzo finale
    return "Il prezzo del viaggio è: " + prezzoFinale + " €";
}

// Calcola e visualizza il prezzo finale del viaggio
var prezzoViaggio = calcolaPrezzoViaggio(chilometri, eta);
console.log(prezzoViaggio);

