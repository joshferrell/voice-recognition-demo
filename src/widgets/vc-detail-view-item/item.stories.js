import React from 'react';
import uuid from 'uuid/v4';
import { Subject } from 'rxjs';
import { MasterDetailsView } from 'react-desktop/windows';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
/* eslint-enable import/no-extraneous-dependencies */

import VCMasterDetailsViewItem from './item';

storiesOf('Widget/Master Details View', module)
    .addDecorator(withKnobs)
    .add('with text', withInfo(`
      this is a test
    `)(() => {
        const subject$ = new Subject();

        // test voice event using rxjs subscription
        setTimeout(() => {
            console.log('voice event: click 2');
            subject$.next('click 2');
        }, 3000);

        const id1 = `item-${uuid()}`;
        const id2 = `item-${uuid()}`;

        const itemComponentOne = (<p>Item 1</p>);
        const itemViewOne = (<div>This is an example view</div>);
        const itemComponentTwo = (<p>Item 2</p>);
        const itemViewTwo = (<div>This is another view</div>);

        return (
            <MasterDetailsView theme="light">
                {VCMasterDetailsViewItem(itemComponentOne, itemViewOne, 1, subject$, id1)}
                {VCMasterDetailsViewItem(itemComponentTwo, itemViewTwo, 2, subject$, id2)}
            </MasterDetailsView>
        );
    }));
