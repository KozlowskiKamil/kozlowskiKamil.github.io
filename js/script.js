let i = 0;
const txt = ' engage in both design and coding, and it brings me immense joy.';
const speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("write-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}