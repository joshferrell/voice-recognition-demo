const translateStrings = (subject$, data) => {
    if (data.toLowerCase().includes('stop listening')) {
        return 'stopping-voice-1234';
    }

    const translatedString = data
        .toLowerCase()
        .replace('quick', 'click')
        .replace('one', '1')
        .replace('to', '2')
        .replace('too', '2')
        .replace('for', '4')
        .replace('fore', '4')
        .replace('cook', 'click')
        .replace('on', '1')
        .replace('c8n', '10')
        .replace('cut', 'click')
        .replace('a', '8')
        .replace('like', 'click')
        .replace('well', '12')
        .replace('ate', '8')
        .replace('right', 'click')
        .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '')
        .split(' ');

    const clickIndex = translatedString.indexOf('click');
    if (clickIndex != -1 && translatedString[clickIndex + 1]) {
        const number = parseInt(translatedString[clickIndex + 1], 10);
        if (!Number.isNaN(number)) {
            subject$.next(`click ${number}`);
        }
    }

    return translatedString.join(' ');
};

export default translateStrings;
