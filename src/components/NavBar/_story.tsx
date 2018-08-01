import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { css } from 'react-emotion';

import Step from './Step';
import NavBar from '.';

const stepWidth = 11.75

const fullWidth = css`
  width: ${stepWidth * 3}rem;
`;

const stepWidthCss = css`
  width: ${stepWidth}rem;
`;

const navBarStories = storiesOf('NavBar', module)

navBarStories.add(
  'with first step active',
  withInfo({ inline: true })(() => (
    <NavBar currentStep='step_1' className={fullWidth} />
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
      className={stepWidthCss}
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
      className={stepWidthCss}
     />
  ))
);
