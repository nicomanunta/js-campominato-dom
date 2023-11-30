
function createCell(num){
    let element = document.createElement("div")
    element.classList.add("square")
    element.innerText = num
    
    return element
}
function createGrid(){
    document.getElementById("grid").innerHTML = "";
    
    for(let i = 0; i<100; i++){
        
        let square = createCell(i+1)
        square.addEventListener("click", function(){
            this.classList.toggle("clicked")
            console.log("Hai cliccato la cella numero" +" "+ parseInt(i+1))
        })
        grid.appendChild(square)
    
    }
    
}




document.getElementById("play").addEventListener("click", function(){
    createGrid()
})