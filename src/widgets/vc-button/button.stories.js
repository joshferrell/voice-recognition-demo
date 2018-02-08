import React from 'react';
import { Subject } from 'rxjs';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import VoiceButton from './button';

storiesOf('Widget/Button', module)
    .addDecorator(withKnobs)
  .add('with text', withInfo(`
      this is a test
  `)(() => {
      const subject$ = new Subject();

      // test voice event using rxjs subscription
      setTimeout(() => {
          console.log('voice event: click 2');
          subject$.next('click 2')
      }, 3000);

      return (
          <VoiceButton subject={subject$} number={2} onClick={action('click triggered')}>
              {text('button text', 'Click Me!')}
          </VoiceButton>
      );
  }));
