let i = 0;
const txt = 'oftware development and solution design bring me immense joy.';
const speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("write-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
