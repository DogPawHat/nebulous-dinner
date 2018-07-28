import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import AppHeader from '../components/AppHeader';
import TestFont from '../components/TestFont';

import '../index.css';

const stories = storiesOf("Components", module);

stories.add(
  "AppHeader test",
  withInfo({ inline: true })(() => <AppHeader>Hello!</AppHeader>)
);


stories.add(
  "TestFont test",
  withInfo({ inline: true })(() => <TestFont>Hello!</TestFont>)
);