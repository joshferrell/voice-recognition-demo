import React from 'react';
import PropTypes from 'prop-types';
import './number.css';

const VoiceNumber = ({
    number,
    children,
    className,
    ...props
}) => (
    <div
        className={[className, 'vc-number-container'].join(' ')}
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
    className: PropTypes.string,
    number: PropTypes.string.isRequired
};

VoiceNumber.defaultProps = {
    children: null,
    className: ''
};

export default VoiceNumber;
