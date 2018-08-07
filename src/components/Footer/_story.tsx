import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { css } from 'react-emotion';

import Footer from '.';

const sizeAndMargin = css`
  width: 35.25rem;
  margin: 3.3rem;
`;

const navBarStories = storiesOf('Footer', module)

navBarStories.add(
  'with text',
  withInfo({ inline: true })(() => (
    <div className={sizeAndMargin}>
      <Footer />
    </div>
  ))
);
