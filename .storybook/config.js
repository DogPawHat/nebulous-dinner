import { configure } from '@storybook/react';

import 'normalize.css';
import '../src/index.css';

const req = require.context('../src/components', true, /_story\.tsx$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
