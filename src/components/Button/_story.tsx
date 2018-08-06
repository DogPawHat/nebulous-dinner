import { withInfo } from 'storybook__addon-info';
import { storiesOf } from 'storybook__react';
import React from 'react';

import Button from '.';


const navBarStories = storiesOf('Button', module)

navBarStories.add(
  'with text',
  withInfo({ inline: true })(() => (
    <Button>Next</Button>
  ))
)
