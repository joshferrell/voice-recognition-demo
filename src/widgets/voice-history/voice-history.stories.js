import React from 'react';
import { Subject } from 'rxjs';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
/* eslint-enable eslint-disable import/no-extraneous-dependencies */

import VoiceHistory from './voice-history';

storiesOf('Widget/Voice History', module)
    .add('voice computer number', withInfo(`
      this is a test
    `)(() => {
        const subject = new Subject();

        setTimeout(() => {
            subject.next('click 4');
        }, 1500);

        setTimeout(() => {
            subject.next('click 4');
        }, 9000);

        setTimeout(() => {
            subject.next('click 2');
        }, 1000);

        return <VoiceHistory subject={subject} />;
    }));
