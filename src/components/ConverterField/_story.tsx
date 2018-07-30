import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';

import ConverterField from './index';

const stories = storiesOf('ConverterField', module)

stories.add(
  'active',
  withInfo({ inline: true })(() => (
    <ConverterField active={true} description="you send" width='564px'/>
  ))
);

stories.add(
  'not active',
  withInfo({ inline: true })(() => (
    <ConverterField 
      active={false} 
      description="reciver gets" 
      width='564px'
    />
  ))
);
