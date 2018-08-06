import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Details from './View';
import { css } from 'react-emotion';

const sizeAndMargin = css`
  margin: 3.3rem;
`;

const DetailsStories = storiesOf('Details', module)

DetailsStories.add(
  'default',
  withInfo({ inline: true })(() => (
    <Details
      className={sizeAndMargin}
    />
  ))
);
