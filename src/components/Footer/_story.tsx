import { withInfo } from 'storybook__addon-info';
import { storiesOf } from 'storybook__react';
import React from 'react';

import Footer from '.';

const navBarStories = storiesOf('Footer', module)

navBarStories.add(
  'with text',
  withInfo({ inline: true })(() => (
    <Footer />
  ))
);
