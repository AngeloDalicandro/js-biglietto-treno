// Acquisisco informazioni sulla lunghezza del viaggio
const travelLenght = prompt( "Quanti kilometri è lungo il tuo viaggio?" );

console.log( travelLenght );

// Calcolo il costo del viaggio
const travelPrice = parseInt( travelLenght * 0.21 );

console.log( travelPrice );

// Acquisisco informazioni sull'età del passeggero
const passengerAge = prompt( "Qual è l'età del passeggero?" );

console.log( passengerAge );

// Applico lo sconto se applicabile
let userMessage;

// Per l'applicazione dello sconto invece che calcolare lo sconto e sottrarlo ho calcolato direttamente l'importo scontato
if( passengerAge < 18 ) {
    userMessage = (travelPrice * 80 / 100).toFixed(2);
} else if( passengerAge > 65 ) {
    userMessage = (travelPrice * 60 / 100).toFixed(2);
} else {
    userMessage = travelPrice.toFixed(2);
}

console.log( userMessage )

// Stampo

document.getElementById('travel-price').innerHTML = userMessage;