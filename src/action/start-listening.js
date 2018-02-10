
const requestToken = async () => {
    const url = 'https://wt-f3ab3db2f1d8499d280a3d0c9b62c78b-0.run.webtask.io/ibm_voice_tokenrequest/api/speech-to-text/token';
    const res = await fetch(url);
    const token = await res.text();
    return token;
};

export default requestToken;
