import React, { Component } from 'react';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';
import wordsToNumbers from 'words-to-numbers';
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
            isMicrophoneHelpVisible: false,
            voiceText: ''
        };

        const { subject } = this.props;
        subject.subscribe(() => {
            this.setState({
                voiceText: ''
            });
        });
    }

    componentDidMount = async () => {
        this.token = await requestToken();
    }

    setStreamEvents = () => {
        const { subject } = this.props;
        const handleStreamUpdate = makeHandleStreamUpdate(
            subject,
            this.stream
        );

        this.stream.on('data', (data) => {
            const res = handleStreamUpdate(data);
            if (res === 'stopping-voice-1234') {
                this.setState({
                    isListening: false,
                    isMicrophoneHelpVisible: false,
                    voiceText: ''
                });
            } else {
                this.setState({
                    voiceText: res
                });
            }
        });
        this.stream.on('error', (err) => {
            console.log(err);
        });
    }

    toggleListening = () => {
        const { isListening } = this.state;
        this.setState({ isListening: !isListening });

        if (this.state.isListening) {
            this.setState({ isMicrophoneHelpVisible: false });
        } else {
            setTimeout(() => {
                this.setState({ isMicrophoneHelpVisible: true });
            }, 2500);

            this.stream = recognizeMic({
                token: this.token,
                objectMode: true,
                extractResults: true,
                format: true
            });

            this.setStreamEvents();
        }
    }

    handleInputChange = (e) => {
        this.setState({
            voiceText: e.target.value
        });
    }

    handleInputSubmit = (e) => {
        e.preventDefault();
        const { voiceText } = this.state;
        const { subject } = this.props;
        const formattedText = wordsToNumbers(voiceText);
        subject.next(formattedText);
    }

    dismissMicrophone = () => {
        this.setState({
            isMicrophoneHelpVisible: false
        });
    }

    render = () => (
        <div className="voice-input-controls">
            <form className="text-controls" onSubmit={this.handleInputSubmit}>
                <label htmlFor="textControl" style={{ display: 'none' }}>
                    Voice Input
                </label>
                <input
                    id="textControl"
                    type="text"
                    placeholder="click one"
                    value={this.state.voiceText}
                    onChange={this.handleInputChange}
                />
                <button className="text-control-submit" type="submit">
                    <img className="submit-arrow" src={RightArrow} alt="submit text" />
                </button>
            </form>
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
