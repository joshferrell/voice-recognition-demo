import React from 'react';
import PropTypes from 'prop-types';
import { MicrophoneSVG, AudioSVG } from '../../media';
import './microphone-button.css';

const MicrophoneButton = ({ isListening, className, inputRef, ...attr }) => {
    const classList = [className, 'microphone-button', isListening && 'listening'].join(' ');
    return (
        <button className={classList} {...attr} ref={inputRef}>
            { isListening ? <AudioSVG /> : <MicrophoneSVG /> }
        </button>
    );
};

MicrophoneButton.propTypes = {
    isListening: PropTypes.bool.isRequired,
    className: PropTypes.string
};

MicrophoneButton.defaultProps = {
    className: ''
};

export default MicrophoneButton;
