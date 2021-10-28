window.addEventListener("load", function () {
  const audioPlayer = <HTMLAudioElement>document.createElement("audio");
  const play = <HTMLButtonElement>document.getElementById("play");
  const stop = <HTMLButtonElement>document.getElementById("stop");
  audioPlayer.addEventListener("canplaythrough", function () {
    stop.disabled = false;
    console.log(audioPlayer.duration);
    stop.addEventListener("click", () => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    });
  });
  stop.disabled = true;
  play.addEventListener("click", audioPlayer.play);
  audioPlayer.src = "./Adrift.mp3";
  // audioPlayer.play();
  const audioCtx = new AudioContext();
  const aBuffer = audioCtx.createBufferSource();
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./1_2_3.wav");
  xhr.onreadystatechange = () => {
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
