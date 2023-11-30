// Definire una funzione che generi dei numeri casuali tutti diversi, se genera un numero gia generato non lo insrisce e ne genera un altro
function generateRandomNumber(bombs_in_array){
    let check_number = false
    let random_number
    while(check_number == false){
        random_number = Math.floor(Math.random()* 100 + 1)
        if(bombs_in_array.includes(random_number) == false){
            check_number = true
        }
    }
    return random_number
}
// Definizione funzione che genera le bombe
function generateBombs(number_bombs){
    let bombs = []
    
    
    for(let i = 0; i<number_bombs; i++){
        // Chiamare la funzione che genera i numeri (bombe) casuali
        let num_bombs_in_array = generateRandomNumber(bombs)
        bombs.push(num_bombs_in_array)
    }
    console.log(bombs)
    return bombs
}


// Definizione funzione per creare le celle graficamente
function createCell(num){
    let element = document.createElement("div")
    element.classList.add("square")
    element.innerText = num
    
    return element
}
// Definizione funzione per far iniziare la partita
function createGrid(){
    let number_bombs = 16
    document.getElementById("grid").innerHTML = "";

    let bombs_generator = generateBombs(number_bombs)
    let punteggio = 0

    for(let i = 1; i<=100; i++){

        // Chiamo la funzione che crea le celle graficamente
        let square = createCell(i)
        // Le celle cambiano colore al click
        square.addEventListener("click", function(){
            if(bombs_generator.includes(i) == false){
                this.classList.add("clicked")
                
                punteggio = punteggio + 1
                document.getElementById("score").innerHTML = `Score: ${punteggio}`
            }
            else{
                this.classList.add("clicked-bomb")
            }
        })
        grid.appendChild(square)
    
    }
}

// Recupero il pulsante dal DOM e aggiungo il comando al click che chiama la funzione per far iniziare la partita
document.getElementById("play").addEventListener("click", function(){
    createGrid()
})
