// Definizione funzione per creare le celle graficamente
function createCell(num){
    let element = document.createElement("div")
    element.classList.add("square")
    element.innerText = num
    
    return element
}
// Definizione funzione per far iniziare la partita
function createGrid(){
    document.getElementById("grid").innerHTML = "";
    
    for(let i = 0; i<100; i++){

        // Chiamo la funzione che crea le celle graficamente
        let square = createCell(i+1)
        // Le celle cambaino colore al click
        square.addEventListener("click", function(){
            this.classList.toggle("clicked")
            console.log("Hai cliccato la cella numero" +" "+ parseInt(i+1))
        })
        grid.appendChild(square)
    
    }
    
}

// Recupero il pulsante dal DOM e aggiungo il comando al click che chiama la funzione per far iniziare la partita
document.getElementById("play").addEventListener("click", function(){
    createGrid()
})


// Definizione funzione che genera le bombe
function generateBombs(number_bombs){
    let bombs = []

    for(let i = 0; i<number_bombs; i++){

    }
}