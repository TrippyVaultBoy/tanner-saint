const text = "Hello, I'm Tanner.";
const speed = 100;
let i = 0

function typewriter() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typewriter, speed);
    }
}

window.onload = typewriter;