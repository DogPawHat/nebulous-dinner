import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Footer from '.';

const navBarStories = storiesOf('Footer', module)

navBarStories.add(
  'with text',
  withInfo({ inline: true })(() => (
    <Footer />
  ))
);
