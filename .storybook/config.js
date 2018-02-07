import { configure, setAddon } from '@storybook/react';
import infoAddon, { setDefaults } from '@storybook/addon-info';

const req = require.context('../src', true, /\.stories\.js$/);
const addonInfoDefaults = {
    inline: true
};

// initialize addon info with default settings
setDefaults(addonInfoDefaults);
setAddon(infoAddon);

function loadStories() {
    // load stories that end with .stories.js in the src directory
    req.keys().forEach(file => req(file));
}

configure(loadStories, module);
