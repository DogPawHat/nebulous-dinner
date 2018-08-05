import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Converter from '.';
import { css } from 'react-emotion';

const sizeAndMargin = css`
  width: 35.25rem;
  margin: 3.3rem;
`;

storiesOf('Converter', module).add(
  'default',
  withInfo({ inline: true })(() => <Converter
    defaultCurrency='EUR'
    defaultValue={2000}
    eurToGbpRate={0.86022}
    className={sizeAndMargin} />)
);
