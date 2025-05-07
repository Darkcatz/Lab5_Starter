// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti()
  const selectElement = document.querySelector("#horn-select");
  const image = document.querySelector('img');
  const audio = document.querySelector('audio');
  const vol = document.querySelector("#volume-controls");
  const play = document.querySelector('button');
  let confetti = false;
  const volImage = document.getElementById('volume-controls').querySelector('img');

  selectElement.addEventListener("change", (Event) => {
    image.src = `assets/images/${Event.target.value}.svg`
    audio.src = `assets/audio/${Event.target.value}.mp3`
    if(Event.target.value == "party-horn"){
      confetti = true;
    } else {
      confetti = false;
    }
  });

  vol.addEventListener("input", (Event) => {
    let volume = Event.target.value;
    
    if(volume == 0){
      volImage.src = `assets/icons/volume-level-0.svg`
    } else if(volume >= 1 && volume < 33){
      volImage.src = `assets/icons/volume-level-1.svg`
    } else if(volume >= 33 && volume < 67){
      volImage.src = `assets/icons/volume-level-2.svg`
    } else {
      volImage.src = `assets/icons/volume-level-3.svg`
    }
    audio.volume = volume / 100;
  });

  play.addEventListener("click", (Event) => {
    audio.play();
    if(confetti){
      jsConfetti.addConfetti({
          emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
      });
    }
  });

}