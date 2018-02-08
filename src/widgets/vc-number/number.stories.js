import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
/* eslint-enable eslint-disable import/no-extraneous-dependencies */

import VoiceNumber from './number';

storiesOf('Voice Number', module)
    .addDecorator(withKnobs)
    .add('voice computer number', withInfo(`
      this is a test
    `)(() => (
        <VoiceNumber number={text('number', '2')}>
            <button style={{ padding: '10px 20px' }}>test</button>
        </VoiceNumber>
    )));
