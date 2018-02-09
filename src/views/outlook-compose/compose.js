import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'office-ui-fabric-react';
import { VCButton, VoiceNumber } from '../../widgets';
import './compose.css';

export default class ComposeEmail extends Component {
    constructor(props) {
        super(props);

        this.inputItems = Array(2).fill(0);
    }

    makeInputListener = index => (event) => {
        const { startNumber } = this.props;
        if (event.includes(`click ${index + startNumber}`)) {
            if (this.inputItems[index]) {
                const { id } = this.inputItems[index];
                const target = document.getElementById(id);
                if (target) target.focus();
            }
        }
    }

    textAreaListener = (event) => {
        const { startNumber } = this.props;
        if (event.includes(`click ${startNumber + 2}`)) {
            const target = document.getElementById('message');
            if (target) target.focus();
        }
    }

    render = () => {
        const { subject, startNumber } = this.props;
        this.inputItems.forEach((x, index) => {
            const eventListener = this.makeInputListener(index);
            subject.subscribe(eventListener);
        });

        subject.subscribe(this.textAreaListener);

        return (
            <form className="vc-compose">
                <div>
                    <h3 style={{ display: 'none' }}>Create New Email</h3>
                    <div className="vc-email-list">
                        <label htmlFor="fromAddress">
                            <VoiceNumber number={startNumber}>From:</VoiceNumber>
                        </label>
                        <input
                            id="fromAddress"
                            type="email"
                            name="fromAddress"
                            required
                            ref={(input) => { this.inputItems[0] = input; }}
                        />
                    </div>
                    <div className="vc-email-list">
                        <label htmlFor="toAddress">To:</label>
                        <input
                            id="toAddress"
                            type="email"
                            readOnly
                            value="Voice Computer;"
                        />
                    </div>
                    <div className="vc-email-list">
                        <label htmlFor="subject">
                            <VoiceNumber number={startNumber + 1}>Subject:</VoiceNumber>
                        </label>
                        <input
                            id="subject"
                            type="text"
                            value="Interested in Voice Computer"
                            required
                            ref={(input) => { this.inputItems[1] = input; }}
                        />
                    </div>
                    <div>
                        <label htmlFor="message">
                            <VoiceNumber number={startNumber + 2}>Email Message</VoiceNumber>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                        >
                            This is pretty neat! I&apos;d like to hear more.
                        </textarea>
                    </div>
                </div>
                <VCButton id="submitEmail" type="submit" number={startNumber + 3} subject={subject} color="#0073c7">
                    <Icon iconName="Send" style={{ paddingRight: '10px', fontSize: '1.3rem' }} />
                    Submit
                </VCButton>
            </form>
        );
    }
}
