import React, { Component, Fragment } from 'react';
import { TitleBar } from 'react-desktop/windows';
import './titlebar.css';

class VoiceTitleBar extends Component {
    constructor(props) {
        super(props);
        this.buttons = Array(3);
    }

    makeEventListener = index => (event) => {
        if (event.includes(`click ${index + 1}`)) {
            this.buttons[index].click();
        }
    }

    hiddenButton = (index, action) => (
        <button
            ref={(button) => { this.buttons[index] = button; }}
            style={{ display: 'none' }}
            onClick={action}
        />
    )

    render = () => {
        const {
            onCloseClick,
            onMinimizeClick,
            onMaximizeClick,
            subject,
            ...props
        } = this.props;

        const onMinimizeEvent = this.makeEventListener(0);
        const onMaximizeEvent = this.makeEventListener(1);
        const onCloseEvent = this.makeEventListener(2);

        subject.subscribe(onMinimizeEvent);
        subject.subscribe(onMaximizeEvent);
        subject.subscribe(onCloseEvent);

        return (
            <div className="vc-titlebar">
                {onMinimizeClick && this.hiddenButton(0, onMinimizeClick)}
                {onMaximizeClick && this.hiddenButton(1, onMaximizeClick)}
                {onCloseClick && this.hiddenButton(2, onCloseClick)}
                <TitleBar
                    onCloseClick={onCloseClick}
                    onMinimizeClick={onMinimizeClick}
                    onMaximizeClick={onMaximizeClick}
                    background="#fafafa"
                    color="#2b2b2b"
                    {...props}
                />
            </div>
        );
    }
}

export default VoiceTitleBar;
