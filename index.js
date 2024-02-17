

let drumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function () {
        playSound(this.innerText);
        buttonAnimation(this.innerText);
    });
}

document.addEventListener("keydown", function(e){
    playSound(e.key);
    buttonAnimation(e.key);
})

function playSound(drum) {
    switch (drum) {
        case "w":
            audio = new Audio("./sounds/crash.mp3");
        case "a":
            audio = new Audio("./sounds/kick-bass.mp3");
            break;
        case "s":
            audio = new Audio("./sounds/snare.mp3");
            break;    
        case "d":
            audio = new Audio("./sounds/tom-1.mp3");
            break; 
        case "j":
            audio = new Audio("./sounds/tom-2.mp3");
            break; 
        case "k":
            audio = new Audio("./sounds/tom-3.mp3");
            break; 
        case "l":
            audio = new Audio("./sounds/tom-4.mp3");
            break; 

        default:
            break;
    }
    audio.play();
}

function buttonAnimation(drum) {
    document.querySelector("." + drum).classList.toggle("pressed");
    setTimeout(function() {document.querySelector("." + drum).classList.toggle("pressed")}, 100);
}