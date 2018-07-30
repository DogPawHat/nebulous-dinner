import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Field } from './index';

const stories = storiesOf('ConverterField', module)

stories.add(
  'active',
  withInfo({ inline: true })(() => (
    <Field active={true} description="you send"/>
  ))
);

stories.add(
  'not active',
  withInfo({ inline: true })(() => (
    <Field 
      active={false} 
      description="reciver gets"
    />
  ))
);
