import React from 'react';
import { Subject } from 'rxjs';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
/* eslint-enable eslint-disable import/no-extraneous-dependencies */

import VoiceInput from './voice-input';

storiesOf('Widget/Voice Input', module)
    .addDecorator(withKnobs)
    .add('voice computer number', withInfo(`
      this is a test
    `)(() => {
        const subject = new Subject();

        return <VoiceInput subject={subject} />;
    }));
