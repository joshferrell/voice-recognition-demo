
const makeHandleStreamUpdate = (subject$, stream) => (data) => {
    if (data.alternatives[0] && data.final) {
        if (data.alternatives[0].transcript.toLowerCase().includes('stop listening')) {
            stream.stop();
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
            .replace('a', '8')
            .replace('like', 'click')
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        subject$.next(event);
    }
};

export default makeHandleStreamUpdate;
