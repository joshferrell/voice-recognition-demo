import React from 'react';
import { InboxView, Menu } from '../.';

const Main = () => {
    const subject = { subscribe: () => {} };

    return (
        <Menu subject={subject}>
            <InboxView baseNumber={8} subject={subject} />
        </Menu>
    );
};

export default Main;
