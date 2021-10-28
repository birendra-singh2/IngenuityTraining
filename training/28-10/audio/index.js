"use strict";
window.addEventListener("load", function () {
    var audioPlayer = document.createElement("audio");
    var play = document.getElementById("play");
    var stop = document.getElementById("stop");
    audioPlayer.addEventListener("canplaythrough", function () {
        stop.disabled = false;
        console.log(audioPlayer.duration);
        stop.addEventListener("click", function () {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
        });
    });
    stop.disabled = true;
    play.addEventListener("click", audioPlayer.play);
    audioPlayer.src = "./Adrift.mp3";
    // audioPlayer.play();
    var audioCtx = new AudioContext();
    var aBuffer = audioCtx.createBufferSource();
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./1_2_3.wav");
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            console.log(xhr.response);
            audioCtx.decodeAudioData(xhr.response, function (buffer) {
                aBuffer.buffer = buffer;
                aBuffer.connect(audioCtx.destination);
                aBuffer.start();
            });
        }
    };
    xhr.responseType = "arraybuffer";
    xhr.send();
});
