import React, { Component } from 'react';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone'
import { Window, TitleBar, Text } from 'react-desktop/windows';

class App extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        };
    }

    onListenClick = async () => {
        const url = 'https://wt-f3ab3db2f1d8499d280a3d0c9b62c78b-0.run.webtask.io/ibm_voice_tokenrequest/api/speech-to-text/token';
        const res = await fetch(url);
        const token = await res.text();
        const stream = recognizeMic({
            token,
            objectMode: true,
            extractResults: true,
            format: true
        });

        stream.on('data', (data) => {
            if (data.alternatives[0] && data.final) {
                if (data.alternatives[0].transcript.toLowerCase().includes('stop listening')) {
                    console.log('stopped');
                    stream.stop();
                }
                console.log(data.alternatives[0].transcript.toLowerCase());
            }
            this.setState({
                text: data.alternatives[0].transcript
            });
        });

        stream.on('error', (err) => {
            console.log(err);
        });


    }

    render = () => (
        <div>
            <p>{this.state.text}</p>
            <button onClick={this.onListenClick}>Start Microphone</button>
            <Window
                theme="light"
                chrome
                height="300px"
                padding="12px"
            >
                <TitleBar title="Voice Computer Demo" controls />
                <Text>Hello World</Text>
            </Window>
        </div>
    );
}

export default App;
