// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;

  const input = document.querySelector("#text-to-speak");
  const voiceSelect = document.querySelector("select");
  const talk = document.querySelector('button');
  const face = document.querySelector('img');

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talk.addEventListener("click", (Event) => {
    Event.preventDefault();
    const utterThis = new SpeechSynthesisUtterance(input.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    utterThis.onstart = () => {
      face.src = 'assets/images/smiling-open.png';
    }
    utterThis.onend = () => {
      face.src = 'assets/images/smiling.png';
    }

    synth.speak(utterThis);
    
    inputTxt.blur();
  });
}