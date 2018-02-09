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
            const target = document.getElementById(this.props.id);
            if (target) target.click();
        }
    }

    render = () => {
        const { onClick, number, subject, children, id, ...props } = this.props;
        subject.subscribe(this.eventListener);
        return (
            <Fragment>
                <VoiceNumber number={number}>
                    <Button {...props} onClick={onClick}>
                        {children}
                    </Button>
                </VoiceNumber>
                <button
                    id={id}
                    style={{ display: 'none' }}
                    onClick={onClick}
                ></button>
            </Fragment>
        )
    }
}

export default VoiceButton;
