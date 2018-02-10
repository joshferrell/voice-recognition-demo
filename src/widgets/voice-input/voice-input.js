import React, { Component } from 'react';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';
import { TeachingBubble } from 'office-ui-fabric-react';
import { requestToken, makeHandleStreamUpdate } from '../../action';
import { RightArrow } from '../../media';
import { MicrophoneButton } from '../.';
import './voice-input.css';

export default class VoiceInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isListening: false,
            isMicrophoneHelpVisible: false
        };
    }

    componentDidMount = async () => {
        this.token = await requestToken();
    }

    toggleListening = () => {
        const { isListening } = this.state;
        const { subject } = this.props;

        if (this.state.isListening) {
            this.setState({ isMicrophoneHelpVisible: false });

            this.stream = recognizeMic({
                token: this.token,
                objectMode: true,
                extractResults: true,
                format: true
            });

            const handleStreamUpdate = makeHandleStreamUpdate(
                subject,
                this.stream
            );

            this.stream.on('data', handleStreamUpdate);
            this.stream.on('error', (err) => {
                console.log(err);
            });
        } else {
            setTimeout(() => {
                this.setState({ isMicrophoneHelpVisible: true })
            }, 2500);
        }

        this.setState({ isListening: !isListening });
    }

    dismissMicrophone = () => {
        this.setState({
            isMicrophoneHelpVisible: false
        });
    }

    render = () => (
        <div className="voice-input-controls">
            <div className="text-controls">
                <label htmlFor="textControl" style={{ display: 'none' }}>
                    Voice Input
                </label>
                <input id="textControl" type="text" placeholder="click one" />
                <button className="text-control-submit" type="submit">
                    <img className="submit-arrow" src={RightArrow} alt="submit text" />
                </button>
            </div>
            <div className="voice-controls">
                <MicrophoneButton
                    isListening={this.state.isListening}
                    onClick={this.toggleListening}
                    inputRef={(el) => { this.microphoneButton = el; }}
                />
                {this.state.isMicrophoneHelpVisible && (
                    <TeachingBubble
                        targetElement={this.microphoneButton}
                        hasCondensedHeadline
                        hasCloseIcon
                        onDismiss={this.dismissMicrophone}
                        headline="Tired of Talking?"
                    >
                        Simply say 'stop listening' or click the microphone icon
                        again to stop the microphone.
                    </TeachingBubble>
                )}
            </div>
        </div>
    );
}
