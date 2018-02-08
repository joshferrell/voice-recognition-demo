import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
/* eslint-enable eslint-disable import/no-extraneous-dependencies */

import MainMenu from './main-menu';

const subject = {
    subscribe: () => {}
};

storiesOf('View/Main Container', module)
    .add('voice computer number', withInfo(`
      this is a test
    `)(() => (
        <MainMenu subject={subject} />
    )));
