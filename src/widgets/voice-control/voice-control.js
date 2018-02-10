import React from 'react';
import { VoiceInput, VoiceHistory } from '../../widgets';
import './voice-control.css';

const VoiceControl = ({ subject }) => (
    <div className="voice-control">
        <VoiceHistory subject={subject} />
        <VoiceInput subject={subject} />
    </div>
);

export default VoiceControl;
