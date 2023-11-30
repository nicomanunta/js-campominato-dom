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
    let number_bombs = 16
    
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
    let bombs_generator = generateBombs(number_bombs)
}

// Recupero il pulsante dal DOM e aggiungo il comando al click che chiama la funzione per far iniziare la partita
document.getElementById("play").addEventListener("click", function(){
    createGrid()
})

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
}