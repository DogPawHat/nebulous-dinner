import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import AppHeader from '../components/AppHeader';

const stories = storiesOf("Components", module);

stories.add(
  "AppHeader test",
  withInfo({ inline: true })(() => <AppHeader>Hello!</AppHeader>)
);