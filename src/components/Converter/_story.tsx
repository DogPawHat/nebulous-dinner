import { withInfo } from 'storybook__addon-info';
import { storiesOf } from 'storybook__react';
import React from 'react';

import Converter from './View';
import { css } from 'react-emotion';

const sizeAndMargin = css`
  width: 35.25rem;
  margin: 3.3rem;
`;

const ConverterStories = storiesOf('Converter', module);

ConverterStories
  .add(
    'with EUR default',
    withInfo({ inline: true })(() => (
      <Converter
        defaultCurrency="EUR"
        defaultValue={2000}
        eurToGbpRate={0.86022}
        fee={2.5}
        className={sizeAndMargin}
      />
    ))
  )
  .add(
    'with GBP default',
    withInfo({ inline: true })(() => (
      <Converter
        defaultCurrency="GBP"
        defaultValue={2000}
        eurToGbpRate={0.86022}
        fee={2.5}
        className={sizeAndMargin}
      />
    ))
  )
  .add(
    'with EUR default and different fee',
    withInfo({ inline: true })(() => (
      <Converter
        defaultCurrency="EUR"
        defaultValue={2000}
        eurToGbpRate={0.86022}
        fee={5}
        className={sizeAndMargin}
      />
    ))
  )
  .add(
    'with GBP default and different fee',
    withInfo({ inline: true })(() => (
      <Converter
        defaultCurrency="GBP"
        defaultValue={2000}
        eurToGbpRate={0.86022}
        fee={5}
        className={sizeAndMargin}
      />
    ))
  )
  .add(
    'with EUR default and different rate',
    withInfo({ inline: true })(() => (
      <Converter
        defaultCurrency="EUR"
        defaultValue={2000}
        eurToGbpRate={0.89067}
        fee={5}
        className={sizeAndMargin}
      />
    ))
  )
  .add(
    'with GBP default and different rate',
    withInfo({ inline: true })(() => (
      <Converter
        defaultCurrency="GBP"
        defaultValue={2000}
        eurToGbpRate={0.89067}
        fee={5}
        className={sizeAndMargin}
      />
    ))
  )
