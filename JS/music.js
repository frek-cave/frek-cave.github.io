var audio = document.getElementById("startupsfx")
var splash = document.getElementById('splash')
var bgmusic = document.getElementById('bgmusic')

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', () => {
        audio.play()
        splash.style.opacity = 0;
        splash.style.pointerEvents = "none";
    }, {once : true})
}) 

audio.addEventListener('ended', () => {
    console.log("BG Music : Start")
    bgmusic.play()
})

function toggleBackgroundMusic() {
    if (bgmusic.paused) {
        bgmusic.play()
        console.log("BG Music : Resume")
    } else {
        bgmusic.pause();
        console.log("BG Music : Paused")
    }
}