
const makeHandleStreamUpdate = (subject$, stream) => (data) => {
    if (data.alternatives[0] && data.final) {
        if (data.alternatives[0].transcript.toLowerCase().includes('stop listening')) {
            stream.stop();
            return 'stopping-voice-1234';
        }

        const event = data
            .alternatives[0]
            .transcript
            .toLowerCase()
            .replace('quick', 'click')
            .replace('one', '1')
            .replace('to', '2')
            .replace('too', '2')
            .replace('for', '4')
            .replace('fore', '4')
            .replace('cook', 'click')
            .replace('on', '1')
            .replace('a', '8')
            .replace('like', 'click')
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
            .split(' ');

        const clickIndex = event.indexOf('click');
        if (clickIndex != -1 && event[clickIndex + 1]) {
            console.log(event[clickIndex], clickIndex, event);
            if (Number.isNaN(parseInt(event[clickIndex + 1], 10)) === false) {
                const clickCommand = `${event[clickIndex]} ${event[clickIndex + 1]}`;
                subject$.next(clickCommand);
            }
        }

        return event.join(' ');
    }
};

export default makeHandleStreamUpdate;
