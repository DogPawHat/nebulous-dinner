import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';

import { theme } from '../src/themeStyled';


import 'normalize.css';
import '../src/index.css';

const req = require.context('../src/components', true, /_story\.tsx$/)

addDecorator(story => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
));

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
