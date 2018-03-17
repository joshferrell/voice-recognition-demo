import { translateStrings } from '.';

const makeHandleStreamUpdate = (subject$, stream) => (data) => {
    if (data.alternatives[0] && data.final) {
        const event = translateStrings(data.alternatives[0].transcript);

        if (event === 'stopping-voice-1234') {
            stream.stop();
        }

        return event;
    }

    return (data.alternatives[0] || '');
};

export default makeHandleStreamUpdate;
