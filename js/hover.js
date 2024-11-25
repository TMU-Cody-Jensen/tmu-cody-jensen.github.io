var input = document.querySelector("button");

function inputIn() { 
    input.style.backgroundColor="#3e7ba9"
    input.style.color="black"; 
    input.style.fontWeight="800";
}

function ogInputIn(){
    input.style.backgroundColor="black"; 
    input.style.color="white"; 
    input.style.fontWeight="800";
}

input.addEventListener("mouseover", inputIn);
input.addEventListener("mouseout", ogInputIn);