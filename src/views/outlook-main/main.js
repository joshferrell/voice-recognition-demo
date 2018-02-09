import React from 'react';
import { InboxView, Menu, ComposeEmail } from '../.';

const Main = ({ subject }) => (
    <Menu subject={subject}>
        <InboxView baseNumber={7} subject={subject} />
        <ComposeEmail startNumber={10} subject={subject} />
    </Menu>
);

export default Main;
