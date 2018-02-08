import React from 'react';
import { Subject } from 'rxjs';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
/* eslint-enable import/no-extraneous-dependencies */

import VoiceTitleBar from './titlebar';

storiesOf('Title Bar', module)
    .addDecorator(withKnobs)
    .add('simpel title bar', withInfo(`
      this is a test
  `)(() => {
        const subject$ = new Subject();

        // test voice event using rxjs subscription
        setTimeout(() => {
            console.log('voice event: click 2');
            subject$.next('click 2');
        }, 3000);

        return (
            <VoiceTitleBar
                title={text('title', 'My Windows Application')}
                controls
                subject={subject$}
                theme="light"
                onCloseClick={action('clicked close')}
                onMinimizeClick={action('clicked minimize')}
                onMaximizeClick={action('clicked maximize')}
            />
        );
    }));
