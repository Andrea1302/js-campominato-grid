/* L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro (o simili, l’importante è dare all’utente il feedback che ha scoperto una casella che rimarrà scoperta, con il numero relativo).*/




// 1.Chiedo all utente il livello di difficoltà per il gioco 
    

// 2. creazione griglia 
    // 2.1 in base al livello di difficoltà scelto, la griglia sarà diversa e quindi livello 1(facile) con 100 celle , livello 2 (medio) con 81 celle e livello 3(difficile) con 49 celle 

// 3.quando l utente clicca su ogni cella , questa si colora di azzurro e avrà il numero relativo al suo interno 



// Variabili globali 
const containerSquare = document.getElementById("container_square");



// 1.
const sceltaDifficolta = parseInt(prompt("inserisci il livello di difficoltà ( '1' = Facile), ( '2' = Medio), ( '3' = Difficile)")) ;

// 2.
// 2.1

// difficoltà 1 
if ( sceltaDifficolta === 1 ) {
    for ( let i = 0; i < 100; i++) {
        var squareElement = document.createElement("div");
        squareElement.classList.add("square_easy")
        containerSquare.append(squareElement);
    }
}

// difficoltà 2
if ( sceltaDifficolta === 2 ) {
    for ( let i = 0; i < 81; i++) {
        var squareElement = document.createElement("div");
        squareElement.classList.add("square_medium")
        containerSquare.append(squareElement);
    }
}

// difficoltà 3 
if ( sceltaDifficolta === 3 ) {
    for ( let i = 0; i < 49; i++) {
        var squareElement = document.createElement("div");
        squareElement.classList.add("square_extreme")
        containerSquare.append(squareElement);
    }
}