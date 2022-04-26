let video = document.getElementById("video1")
let controls = document.getElementById("controls")
let p = false
let src = document.getElementById("btnplay")
let i = 0

{
    function play() {
        if (p == false) {
            video.pause()
            src.setAttribute("src", "./images/icons/play.png")
            p = true
        }
        else {
            video.play()
            src.setAttribute("src", "./images/icons/pause.png")
            p = false
        }
    }

    function aumentar() {
        video.currentTime += 10
    }

    function diminuir() {
        video.currentTime -= 10
    }

    function stop() {
        video.currentTime = 0
    }

    function cima() {
        controls.style.visibility = "visible"
    }

    function saiu() {
        controls.style.visibility = "hidden"
    }
}
function fullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
}

function next() {
    if (i == 0) {
        video.setAttribute("src", "./videos/2.mp4")
        i++
    }
    else if (i == 1) {
        video.setAttribute("src", "./videos/3.mp4")
        i++
    }
    else {
        video.setAttribute("src", "./videos/1.mp4")
        i = 0
    }
}

function back() {
    if (i == 0) {
        video.setAttribute("src", "./videos/3.mp4")
        i = 2
    }
    else if (i == 1) {
        video.setAttribute("src", "./videos/1.mp4")
        i = 0
    }
  else if (i == 2){
        video.setAttribute("src","./videos/2.mp4" )
        i = 1
}} 