import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';

import IdentityVerification from './View';
import { css } from 'react-emotion';

const sizeAndMargin = css`
  padding: 3.3rem;
  background-color: rgba(0,0,0,0.6);
`;

const DetailsStories = storiesOf('IdentityVerification', module)

DetailsStories.add(
  'default',
  withInfo({ inline: true })(() => (
    <div className={sizeAndMargin}>
      <IdentityVerification />
    </div>
  ))
);
