import React from 'react';
import PropTypes from 'prop-types';
import './number.css';

const VoiceNumber = ({ number, children }) => (
    <div className="vc-number-container">
        {children}
        <div className="vc-number">
            {number}
        </div>
    </div>

);

VoiceNumber.propTypes = {
    children: PropTypes.node.isRequired,
    number: PropTypes.string.isRequired
};

export default VoiceNumber;
