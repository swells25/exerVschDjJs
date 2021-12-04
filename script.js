var square = document.getElementById("square")

square.addEventListener("mouseover", mouseHover)
function mouseHover() {
    square.style.backgroundColor = "blue"
}

square.addEventListener("mousedown", mousedown)
function mousedown() {
    square.style.backgroundColor = "red"
}
square.addEventListener("mouseup", mouseup)
function mouseup() {
    square.style.backgroundColor = "yellow"
}
square.addEventListener("dblclick", dblclick)
function dblclick() {
    square.style.backgroundColor = "green"
}

square.addEventListener("scroll", scroll)
function scroll() {
    square.style.backgroundColor = "orange"
}

square.addEventListener("keydown", function(event) {
    var colorpush = event.key
    console.log(colorpush)
    if(colorpush === "b"){square.style.backgroundColor = "blue"}
    else if(colorpush === "r"){square.style.backgroundColor = "red"}
    else if(colorpush === "y"){square.style.backgroundColor = "yellow"}
    else if(colorpush === "g"){square.style.backgroundColor = "green"}
    else if(colorpush === "o"){square.style.backgroundColor = "orange"}
    else{square.style.backgroundColor = "black"} 
    })