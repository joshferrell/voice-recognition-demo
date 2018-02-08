import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-desktop/windows';
import { VoiceNumber } from '../.';

class VoiceButton extends Component {
    constructor(props) {
        super(props);
    }

    eventListener = (event) => {
        if (event.includes(`click ${this.props.number}`)) {
            console.log(this.button);
            this.button.click();
        }
    }

    render = () => {
        const { onClick, number, subject, children, ...props } = this.props;
        subject.subscribe(this.eventListener);
        return (
            <Fragment>
                <VoiceNumber number={number}>
                    <Button {...props} onClick={onClick}>
                        {children}
                    </Button>
                </VoiceNumber>
                <button
                    style={{ display: 'none' }}
                    onClick={onClick}
                    ref={(button) => { this.button = button; }}
                ></button>
            </Fragment>
        )
    }
}

export default VoiceButton;
