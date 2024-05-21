
// Selectors

const inputTxt = document.querySelector(".inputtxt");
const voiceSelect = document.querySelector("#voices");

const pitchElement = document.querySelector("#pitchInput");
const rateElement = document.querySelector("#rateInput");

const startButton = document.querySelector(".button-toggle-start")
const stopButton  = document.querySelector(".button-toggle-stop")

const rangeInputs=[pitchElement,rateElement]





// 
const synth = window.speechSynthesis;
let voices = [];




function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;


    if (i === 0) {          // TO SHOW INDEX 0 
        option.selected = true;
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




startButton.addEventListener('click',(e) =>{
    synth.cancel();

    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    utterThis.pitch = pitchElement.value;
    utterThis.rate = rateElement.value;
    const selectedOption = 
        voiceSelect.selectedOptions[0].getAttribute("data-name");

    for(let i=0;i<voices.length;i++){
        if(voices[i].name === selectedOption){
            utterThis.voice= voices[i];
        }
    }

    synth.speak(utterThis);
    inputTxt.blur();
})



stopButton.addEventListener('click',(e) => {
    synth.paused ? synth.resume() : synth.pause();
})