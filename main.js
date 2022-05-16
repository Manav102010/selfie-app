var speechRecognition = window.webkitSpeechRecognition;
var Recognition = new speechRecognition();

function start() {
    document.getElementById("textbox").innerHTML ="";
    Recognition.start();
}
Recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
}

function speak() {
  var synth = window.speechSynthesis; 
     speak_data = document.getElementById("textbox").value;
     var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90

})