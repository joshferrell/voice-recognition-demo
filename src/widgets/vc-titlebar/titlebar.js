import React from 'react';
import { TitleBar } from 'react-desktop/windows';
import './titlebar.css';

const makeEventListener = index => (event) => {
    if (event.includes(`click ${index + 1}`)) {
        this.buttons[index].click();
    }
};

const renderVoiceTitleBar = (
    subject,
    title,
    options = {},
    onCloseClick,
    onMinimizeClick,
    onMaximizeClick
) => {
    const buttons = Array(3);

    const hiddenButton = (index, action) => (
        <button
            ref={(button) => { buttons[index] = button; }}
            style={{ display: 'none' }}
            onClick={action}
        />
    );

    const onMinimizeEvent = makeEventListener(0);
    const onMaximizeEvent = makeEventListener(1);
    const onCloseEvent = makeEventListener(2);

    subject.subscribe(onMinimizeEvent);
    subject.subscribe(onMaximizeEvent);
    subject.subscribe(onCloseEvent);

    return (
        <TitleBar
            onCloseClick={onCloseClick}
            onMinimizeClick={onMinimizeClick}
            onMaximizeClick={onMaximizeClick}
            controls
            title={title}
            className="vc-titlebar"
            {...options}
        >
            {onMinimizeClick && hiddenButton(0, onMinimizeClick)}
            {onMaximizeClick && hiddenButton(1, onMaximizeClick)}
            {onCloseClick && hiddenButton(2, onCloseClick)}
        </TitleBar>
    );
};

export default renderVoiceTitleBar;
