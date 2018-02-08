import React from 'react';
import PropTypes from 'prop-types';
import './number.css';

const VoiceNumber = ({ number, children, ...props }) => (
    <div
        className="vc-number-container"
        {...props}
    >
        {children && children}
        <div className="vc-number">
            {number}
        </div>
    </div>

);

VoiceNumber.propTypes = {
    children: PropTypes.node,
    number: PropTypes.string.isRequired
};

VoiceNumber.defaultProps = {
    children: null
};

export default VoiceNumber;
