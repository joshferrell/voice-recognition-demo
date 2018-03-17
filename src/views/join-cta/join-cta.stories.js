import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
/* eslint-enable eslint-disable import/no-extraneous-dependencies */

import JoinCTA from './join-cta';

storiesOf('View/Join CTA', module)
    .addDecorator(withKnobs)
    .add('voice computer number', withInfo(`
      this is a test
    `)(() => (
        <JoinCTA />

    )));
