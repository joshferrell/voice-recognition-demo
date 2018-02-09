import React from 'react';
import { Fabric } from 'office-ui-fabric-react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
/* eslint-enable eslint-disable import/no-extraneous-dependencies */

import EmailCompose from './compose';

storiesOf('View/Email Compose', module)
    .addDecorator(withKnobs)
    .add('voice computer number', withInfo(`
      this is a test
    `)(() => (
        <Fabric>
            <EmailCompose subject={{ subscribe: () => {} }} numberStart={1} />
        </Fabric>

    )));
