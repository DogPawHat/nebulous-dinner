import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';

import ConverterField from '../ConverterField';

import { ThemeProvider } from 'emotion-theming';

import { theme } from '../themeStyled';

import '../index.css';

const stories = storiesOf('ConverterField', module).addDecorator(story => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
));

stories.add(
  'active',
  withInfo({ inline: true })(() => (
    <ConverterField active={true} description="you send" />
  ))
);

stories.add(
  'not active',
  withInfo({ inline: true })(() => (
    <ConverterField active={false} description="reciver gets" />
  ))
);
