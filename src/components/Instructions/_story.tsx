import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Instructions from '.';


const navBarStories = storiesOf('Instructions', module)

navBarStories.add(
  'with text',
  withInfo({ inline: true })(() => (
    <Instructions />
  ))
)
