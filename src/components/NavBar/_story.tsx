import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Step from './Step';
import NavBar from '.';


const navBarStories = storiesOf('NavBar', module)

navBarStories.add(
  'with first step active',
  withInfo({ inline: true })(() => (
    <NavBar currentStep='step_1' width={`${188 * 3}px`}/>
  ))
)

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