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
const bottonEasy = document.getElementById("easy");
const bottonMedium = document.getElementById("medium");
const bottonHard = document.getElementById("hard");

// 1.
// let sceltaDifficolta = parseInt(prompt("inserisci il livello di difficoltà ( '1' = Facile), ( '2' = Medio), ( '3' = Difficile)")) ;
// while (sceltaDifficolta !== 1 && sceltaDifficolta !== 2 && sceltaDifficolta !== 3 ){
//     // sceltaDifficolta = parseInt(prompt("inserisci il livello di difficoltà ( '1' = Facile), ( '2' = Medio), ( '3' = Difficile)")) ;
//     alert("Scegli 1, 2 o 3");
//     sceltaDifficolta = parseInt(prompt("inserisci il livello di difficoltà ( '1' = Facile), ( '2' = Medio), ( '3' = Difficile)")) ;
// }

// 2.
// 2.1

// difficoltà 1 
bottonEasy.addEventListener("click",
function(){
    // bottonEasy.classList.add("active_botton");
    // let sceltaDifficolta = 1;
    // if ( sceltaDifficolta === 1 ) {
    //     numeroBlocchi = 100;
    //     baseClass = "square_easy";  
    // }
    for ( let i = 1; i <= 100; i++) {
        QElement = '<div class="square_easy"></div'; 
        containerSquare.innerHTML += QElement ;
        let squareElement = document.getElementsByName(QElement);
        squareElement.addEventListener("click",
         function(){
            squareElement.classList.add("active");
         }
        )
    }    
  
}
)

// difficoltà 2
bottonMedium.addEventListener("click",
function(){

    bottonMedium.classList.add("active_botton");
    let sceltaDifficolta = 2;
    if ( sceltaDifficolta === 2 ) {
        numeroBlocchi = 81;
        baseClass = "square_medium";  
    }
    for ( let i = 1; i <= numeroBlocchi; i++) {
        squareElement = document.createElement("div");
        squareElement.classList.add(baseClass)
        containerSquare.append(squareElement);

        // 3
        squareElement.addEventListener("click",
            function(){
                this.classList.add("active");
                this.innerHTML += i;
            }   
    
        )
    }
}
)

// difficoltà 3
bottonHard.addEventListener("click",
function(){

    bottonHard.classList.add("active_botton");
    let sceltaDifficolta = 3;
    if ( sceltaDifficolta === 3 ) {
        numeroBlocchi = 49;
        baseClass = "square_extreme";  
    }
    for ( let i = 1; i <= numeroBlocchi; i++) {
        squareElement = document.createElement("div");
        squareElement.classList.add(baseClass)
        console.log(squareElement);
        containerSquare.append(squareElement);
        

        // 3
        squareElement.addEventListener("click",
            function(){
                this.classList.add("active");
                this.innerHTML += i;
            }   
    
        )
    }
}
)
// // difficoltà 1 
// if ( sceltaDifficolta === 1 ) {
//     numeroBlocchi = 100;
//     baseClass = "square_easy";  
// }

// // difficoltà 2
// if ( sceltaDifficolta === 2 ) {
//     numeroBlocchi = 81;
//     baseClass = "square_medium";
// }

// // difficoltà 3 
// if ( sceltaDifficolta === 3 ) {
//     numeroBlocchi = 49;
//     baseClass = "square_extreme";    
// }

// for ( let i = 1; i <= numeroBlocchi; i++) {
//     squareElement = document.createElement("div");
//     squareElement.classList.add(baseClass)
//     containerSquare.append(squareElement);
//     // 3
//     squareElement.addEventListener("click",
//         function(){
//             this.classList.add("active");
//             this.innerHTML += i;
//         }   

//     )
// }