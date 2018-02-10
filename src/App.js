import React, { Component } from 'react';
import { Subject } from 'rxjs';
import { VoiceControl } from './widgets';
import { Outlook } from './views';
import './app.css';

class App extends Component {
    constructor() {
        super();
        this.subject$ = new Subject();
        this.state = {
            password: ''
        };
    }

    renderDrawbridge = () => (
        <input
            type="text"
            onChange={(e) => { this.setState({ password: e.target.value }); }}
        />
    )

    renderApp = () => (
        <div
            className="app-container"
            style={{
                background: `
                    linear-gradient(
                        rgba(0, 0, 0, 0.15),
                        rgba(0, 0, 0, 0.15)
                    ),
                    url('http://i.imgur.com/asdDG.jpg')
                    no-repeat center/cover
                `
            }}
        >
            <div style={{ display: 'flex' }}>
                <Outlook subject={this.subject$} />
                <VoiceControl subject={this.subject$} />
            </div>

        </div>
    )

    render = () => (
        process.env.NODE_ENV !== 'development' && this.state.password !== '$ayhello1' ?
            this.renderDrawbridge() :
            this.renderApp()
    )
}

export default App;
