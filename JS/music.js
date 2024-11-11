var audio = document.getElementById("startupsfx")
var splash = document.getElementById('splash')

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', () => {
        audio.play()
        splash.style.opacity = 0;
        splash.style.pointerEvents = "none";
    }, {once : true})
}) 