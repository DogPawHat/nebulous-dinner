import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import React from 'react';
import styled from 'react-emotion';

import Button from '.';

const MarginContainer = styled('div')`
  margin: 3.3rem;
`;

const navBarStories = storiesOf('Button', module);

navBarStories
  .addDecorator(story => <MarginContainer>{story()}</MarginContainer>)
  .add('default', withInfo({ inline: true })(() => <Button>Next</Button>))
  .add(
    'default explicit',
    withInfo({ inline: true })(() => (
      <Button size="normal" state="main">
        Next
      </Button>
    ))
  )
  .add(
    'disabled',
    withInfo({ inline: true })(() => (
      <Button state="disabled-main">Next</Button>
    ))
  )
  .add(
    'secondary',
    withInfo({ inline: true })(() => <Button state="secondary">Next</Button>)
  )
  .add(
    'small',
    withInfo({ inline: true })(() => <Button size="small">Next</Button>)
  )
  .add(
    'small and disabled',
    withInfo({ inline: true })(() => (
      <Button size="small" state="disabled-main">
        Next
      </Button>
    ))
  )
  .add(
    'small and secondary',
    withInfo({ inline: true })(() => (
      <Button size="small" state="secondary">
        Next
      </Button>
    ))
  );
