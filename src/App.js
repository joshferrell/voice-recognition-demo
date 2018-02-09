import React, { Component } from 'react';
import { Subject } from 'rxjs';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone'
import { Outlook } from './views';

class App extends Component {
    constructor() {
        super();
        this.subject$ = new Subject();
        this.state = {
            text: '',
            password: ''
        };
    }

    renderDrawbridge = () => (
        <input
            type="text"
            onChange={(e) => { this.setState({ password: e.target.value }); }}
        />
    )

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
                this.subject$.next(event);
            }
            this.setState({
                text: data.alternatives[0].transcript
            });
        });

        stream.on('error', (err) => {
            console.log(err);
        });
    }

    renderApp = () => (
        <div>
            <p>{this.state.text}</p>
            <button onClick={this.onListenClick}>Start Microphone</button>
            <Outlook subject={this.subject$} />
        </div>
    )

    render = () => process.env.NODE_ENV !== 'development' && this.state.password !== '$ayhello1' ?
        this.renderDrawbridge() :
        this.renderApp();
}

export default App;
