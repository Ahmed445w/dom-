function showa() {
  let btn = document.getElementById("b")
  if ( btn.innerHTML =="show"  ) {
    btn.innerHTML = "hide"
 btn.style.backgroundColor = "green"
 a.style.display = "block"
}
  else{
    btn.innerHTML = "show"
 btn.style.backgroundColor = "pink" 
 a.style.display = "none"
  
}
    
}