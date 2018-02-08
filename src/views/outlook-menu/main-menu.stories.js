import React from 'react';
import { Subject } from 'rxjs';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
/* eslint-enable eslint-disable import/no-extraneous-dependencies */

import MainMenu from './main-menu';

storiesOf('View/Main Container', module)
    .add('voice computer number', withInfo(`
      this is a test
    `)(() => {
        const subject$ = new Subject();

        // test voice event using rxjs subscription
        setTimeout(() => {
            console.log('voice event: click 4');
            subject$.next('click 4')
        }, 3000);

        return (
            <MainMenu subject={subject$} />
        );
    }));
