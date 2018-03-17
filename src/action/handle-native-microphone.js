
const handleNativeMicrophone = () => {
    const recognition = new (
        window.SpeechRecognition ||
        window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition
    )();
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onresult = (data) => {
        const speech = data.results[0][0].transcript;
        const event = translateStrings(speech);

        if (event === 'stopping-voice-1234') {
            recognition.stop();
        }

        
    }
}

var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 5;
recognition.start();

recognition.onresult = function(event) {
    console.log('You said: ', event.results[0][0].transcript);
};
