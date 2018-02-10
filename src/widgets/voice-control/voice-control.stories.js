import React from 'react';
import { Subject } from 'rxjs';
import { Fabric } from 'office-ui-fabric-react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
/* eslint-enable eslint-disable import/no-extraneous-dependencies */

import VoiceControl from './voice-control';

storiesOf('Widget/Voice Controls', module)
    .addDecorator(withKnobs)
    .add('voice computer number', withInfo(`
      this is a test
    `)(() => {
        const subject$ = new Subject();

        return (
            <Fabric>
                <VoiceControl subject={subject$} />
            </Fabric>
        );
    }));
