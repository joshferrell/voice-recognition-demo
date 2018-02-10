import React, { Component } from 'react';
import moment from 'moment';
import { TeachingBubble, ActivityItem, Icon } from 'office-ui-fabric-react';
import { RightArrow } from '../../media';
import { MicrophoneButton } from '../../widgets';
import './voice-control.css';

export default class VoiceControl extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isListening: false,
            isMicrophoneHelpVisible: false
        };
    }

    toggleListening = () => {
        const { isListening } = this.state;

        if (!this.state.isListening) {
            setTimeout(() => {
                this.setState({ isMicrophoneHelpVisible: true });
            }, 2000);
        } else {
            this.setState({ isMicrophoneHelpVisible: false });
        }

        this.setState({ isListening: !isListening });
    }

    render = () => {
        return (
            <div className="voice-control">
                <div className="input-history">
                    <ActivityItem
                        activityDescription={[
                            <span key={1}>You said</span>
                        ]}
                        comments={[
                            <span key={1}>Click 1</span>
                        ]}
                        activityIcon={<Icon iconName="CannedChat" />}
                        timeStamp={moment().format('dddd, h:mm:ss a')}
                    />
                </div>
                <div className="input-controls">
                    <div className="text-controls">
                        <label
                            htmlFor="voiceControl"
                            style={{ display: 'none' }}
                        >
                            Voice Input
                        </label>
                        <input id="voiceControl" type="text" placeholder="click one" />
                        <button>
                            <img src={RightArrow} alt="submit text" />
                        </button>
                    </div>
                    <div>
                        <MicrophoneButton
                            isListening={this.state.isListening}
                            onClick={this.toggleListening}
                            inputRef={(el) => { this.microphoneButton = el; }}
                        />
                        {this.state.isMicrophoneHelpVisible && (
                            <div>
                                <TeachingBubble
                                    targetElement={this.microphoneButton}
                                    hasCondensedHeadline
                                    hasCloseIcon
                                    onDismiss={() => this.setState({ isMicrophoneHelpVisible: false })}
                                    headline="Tired of Talking?"
                                >
                                    Simply say 'stop listening' or click the microphone icon
                                    again to stop the microphone.
                                </TeachingBubble>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
