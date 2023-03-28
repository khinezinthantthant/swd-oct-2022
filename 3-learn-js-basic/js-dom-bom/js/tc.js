// variables

const fonts = ["Helvetical", "Gadugi", "Jokerman", "Algerian"];

// selectors

const output = document.querySelector("#output");
const text = document.querySelector("#text");
const count = document.querySelector("#count");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize");
const fontFamily = document.querySelector("#fontFamily");
const textToSpeech = document.querySelector("#textToSpeech");
const speechToText = document.querySelector("#speechToText")
const synth = window.speechSynthesis;

const listen = () => {
  var recognition = new webkitSpeechRecognition();

  // Set the language and start recognizing
  recognition.lang = "en-US";
  
  recognition.start();

  recognition.addEventListener("start", () => {
    speechToText.classList.add("active");
    speechToText.innerHTML = `<div class="spinner-border text-white spinner-border-sm" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`;
  });

  recognition.addEventListener("end", () => {
    speechToText.classList.remove("active");

    speechToText.innerHTML = `<i class="bi bi-mic"></i>`;
  });

  // When a speech result is returned
  recognition.onresult = function (event) {
    // Get the transcript of the spoken words
    // console.log(event.results);
    var transcript = event.results[0][0].transcript;
    text.value += transcript;
  };
};

const speaker = (text) => {
  const utterThis = new SpeechSynthesisUtterance();
  utterThis.rate = 0.8;
  utterThis.text = text;
  utterThis.voice = synth.getVoices()[2];

  utterThis.addEventListener("start",() => {
    textToSpeech.classList.add("active");
  });

  utterThis.addEventListener("end",() => {
    textToSpeech.classList.remove("active");
  });

  synth.speak(utterThis);
}



fonts.forEach((font) => {
  // console.log(font);
  // console.log(new Option(font,font));
  fontFamily.append(new Option(font, font));
});

fontFamily.addEventListener("change", (event) => {
  console.log(event.target.value);
  output.style.fontFamily = event.target.value;
});

// action

// text ထဲမှာစာရိုက်တာနဲ့  output မှာတစ်ခါထဲပြ

text.addEventListener("change", (event) => {
  // console.log(text.value);
  // console.log(event.target.value);

  output.innerText = text.value;
  count.innerText = text.value.length;
});

color.addEventListener("change", (event) => {
  output.style.color = event.target.value;
});

fontSize.addEventListener("change", (event) => {
  console.log(fontSize.value);
  output.style.fontSize = event.target.value + "px";
});

textToSpeech.addEventListener("click",()=>{
  speaker(text.value);
});

speechToText.addEventListener("click",listen);