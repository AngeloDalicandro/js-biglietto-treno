// Acquisisco informazioni sulla lunghezza del viaggio
const travelLenght = prompt( "Quanti kilometri è lungo il tuo viaggio?" );

console.log( travelLenght );

// Calcolo il costo del viaggio
const travelPrice = parseInt( travelLenght * 0.21 );

console.log( travelPrice );

// Acquisisco informazioni sull'età del passeggero
const passengerAge = prompt( "Qual è l'età del passeggero?" );

console.log( passengerAge );

// Applico lo sconto se applicabile e caso il passeggero non rientri nelle tariffe scontate potrà selezionare diverse offerte per il viaggio
let userMessage;

let userChoice;

if( passengerAge < 18 ) {
    userMessage = (travelPrice * 80 / 100).toFixed(2);
} else if( passengerAge > 65 ) {
    userMessage = (travelPrice * 60 / 100).toFixed(2);
} else {
        userChoice = prompt( "Specifica se vuoi viaggiare con l'offerta 'business', 'prima classe' o 'economica'." ).toLowerCase();

        if( userChoice == 'business') {
            userMessage = ( travelPrice * ( travelPrice / 10) ).toFixed(2);
        } else if( userChoice == 'prima classe') {
            userMessage = ( travelPrice * ( travelPrice / 15) ).toFixed(2);
        } else {
            userMessage = travelPrice.toFixed(2);
        }

        console.log( userChoice );
}  

console.log( userMessage );

// Stampo
 
document.getElementById('travel-price').innerHTML = userMessage;