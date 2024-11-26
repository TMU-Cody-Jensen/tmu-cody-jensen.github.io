var input = document.querySelector("button");

function inputIn() { 
    input.style.backgroundColor="#3e7ba9" //this is the blue
    input.style.color="black"; 
    input.style.fontWeight="800";
}

function ogInputIn(){
    input.style.backgroundColor="black"; 
    input.style.color="white"; 
    input.style.fontWeight="800";
}

input.addEventListener("mouseover", inputIn); //makes the button blue with black text
input.addEventListener("mouseout", ogInputIn); //makes the button black with white text