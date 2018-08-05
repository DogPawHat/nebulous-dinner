import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Details from '.';
import { css } from 'react-emotion';

const sizeAndMargin = css`
  width: 19.50rem;
  margin: 3.3rem;
`;

storiesOf('Details', module).add(
  'default',
  withInfo({ inline: true })(() => (
    <Details
      className={sizeAndMargin}
      sending="€2000.00"
      reciving="£1717.94"
      rate="0.8.6022"
      date="25th November"
      fee="£2.50"
      savings="£66.19"
    />
  ))
);
