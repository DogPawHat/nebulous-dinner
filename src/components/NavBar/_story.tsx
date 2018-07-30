import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Step from './Step';

const stepStories = storiesOf('Step', module)

stepStories.add(
  'active',
  withInfo({ inline: true })(() => (
    <Step
      active={true}
      stepTracker='Step 1'
      stepDescription='Transaction Info'
      width='188px'
     />
  ))
);

stepStories.add(
  'not active',
  withInfo({ inline: true })(() => (
    <Step
      active={false}
      stepTracker='Step 2'
      stepDescription='Transaction Info'
      width='188px'
     />
  ))
);