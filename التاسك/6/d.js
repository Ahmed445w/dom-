function rotate() {
    let input = document.getElementById("x")
    let value = input.value 
    console.log(input.value );
    
    let div= document.getElementById("d") 
    div.style.borderRadius = value + "px"
}