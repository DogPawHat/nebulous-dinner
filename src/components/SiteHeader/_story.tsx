import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { css } from 'react-emotion';

import SiteHeader from '.';

const headerStories = storiesOf('Header', module)

headerStories.add(
  'with logo',
  withInfo({ inline: true })(() => (
    <SiteHeader className={css`width: 18rem`}/>
  ))
)
