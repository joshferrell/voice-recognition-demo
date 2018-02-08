import React from 'react';
import { InboxView, Menu } from '../.';

const Main = () => {
    const subject = { subscribe: () => {} };

    return (
        <Menu subject={subject}>
            <InboxView />
        </Menu>
    );
};

export default Main;
