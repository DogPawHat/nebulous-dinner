import { withInfo } from 'storybook__addon-info';
import { storiesOf } from 'storybook__react';
import React from 'react';

import Instructions from '.';


const navBarStories = storiesOf('Instructions', module)

navBarStories.add(
  'with text',
  withInfo({ inline: true })(() => (
    <Instructions />
  ))
)
