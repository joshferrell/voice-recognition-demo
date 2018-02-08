import React from 'react';
import { Subject } from 'rxjs';
import { Fabric } from 'office-ui-fabric-react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
/* eslint-enable eslint-disable import/no-extraneous-dependencies */

import Inbox from './inbox';

storiesOf('View/Inbox', module)
    .addDecorator(withKnobs)
    .add('voice computer number', withInfo(`
      this is a test
    `)(() => {
        const subject$ = new Subject();

        return (
            <Fabric>
                <Inbox subject={subject$} />
            </Fabric>
        );
    }));
