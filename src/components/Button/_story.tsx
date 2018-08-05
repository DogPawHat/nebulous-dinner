import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Button from '.';


const navBarStories = storiesOf('Button', module)

navBarStories.add(
  'with text',
  withInfo({ inline: true })(() => (
    <Button>Next</Button>
  ))
)
