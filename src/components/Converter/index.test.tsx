
import React from 'react'
import {render, cleanup} from 'react-testing-library'
// this add custom jest matchers from jest-dom
import 'jest-dom/extend-expect'

import Converter from '.';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

test('Converter test', () => {
  // Arrange
  const {queryByText} = render(<Converter
    defaultCurrency='EUR'
    defaultValue={2000}
    eurToGbpRate={0.86022}
  />);

  // Assert
  expect(queryByText('€ 2000.00')).not.toBeNull();
  expect(queryByText('£ 1,717.94')).not.toBeNull();
});
