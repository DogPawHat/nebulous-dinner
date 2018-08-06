import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
// this add custom jest matchers from jest-dom
import 'jest-dom/extend-expect';

import Converter from './View';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test('Converter euro to pound', () => {
  // Arrange
  const { getByTestId, container } = render(
    <Converter
      defaultCurrency="EUR"
      defaultValue={2000}
      eurToGbpRate={0.86022}
      fee={2.5}
    />
  );

  const inputEUR = getByTestId('input_EUR') as HTMLInputElement;
  const inputGBP = getByTestId('input_GBP') as HTMLInputElement;

  // Assert
  expect(inputEUR.value).toBe('€ 2,000.00');
  expect(inputGBP.value).toBe('£ 1,717.94');

  expect(container).toMatchSnapshot();
});

test('Converter euro to pound with different value', () => {
  // Arrange
  const { getByTestId, container } = render(
    <Converter
      defaultCurrency="EUR"
      defaultValue={3000}
      eurToGbpRate={0.86022}
      fee={2.5}
    />
  );

  const inputEUR = getByTestId('input_EUR') as HTMLInputElement;
  const inputGBP = getByTestId('input_GBP') as HTMLInputElement;

  // Assert
  expect(inputEUR.value).toBe('€ 3,000.00');
  expect(inputGBP.value).toBe('£ 2,578.16');

  expect(container).toMatchSnapshot();
});

test('Converter euro to pound with different rate', () => {
  // Arrange
  const { getByTestId, container } = render(
    <Converter
      defaultCurrency="EUR"
      defaultValue={2000}
      eurToGbpRate={0.89067}
      fee={2.5}
    />
  );

  const inputEUR = getByTestId('input_EUR') as HTMLInputElement;
  const inputGBP = getByTestId('input_GBP') as HTMLInputElement;

  // Assert
  expect(inputEUR.value).toBe('€ 2,000.00');
  expect(inputGBP.value).toBe('£ 1,778.84');

  expect(container).toMatchSnapshot();
});

test('Converter euro to pound with different fee', () => {
  // Arrange
  const { getByTestId, container } = render(
    <Converter
      defaultCurrency="EUR"
      defaultValue={2000}
      eurToGbpRate={0.86022}
      fee={10}
    />
  );

  const inputEUR = getByTestId('input_EUR') as HTMLInputElement;
  const inputGBP = getByTestId('input_GBP') as HTMLInputElement;

  // Assert
  expect(inputEUR.value).toBe('€ 2,000.00');
  expect(inputGBP.value).toBe('£ 1,710.44');

  expect(container).toMatchSnapshot();
});

test('Converter pound to euro', () => {
  // Arrange
  const { getByTestId, container } = render(
    <Converter
      defaultCurrency="GBP"
      defaultValue={2000}
      eurToGbpRate={0.86022}
      fee={2.5}
    />
  );

  const inputEUR = getByTestId('input_EUR') as HTMLInputElement;
  const inputGBP = getByTestId('input_GBP') as HTMLInputElement;

  // Assert
  expect(inputEUR.value).toBe('€ 2,322.49');
  expect(inputGBP.value).toBe('£ 2,000.00');

  expect(container).toMatchSnapshot();
});

test('Converter pound to euro with different value', () => {
  // Arrange
  const { getByTestId, container } = render(
    <Converter
      defaultCurrency="GBP"
      defaultValue={3000}
      eurToGbpRate={0.86022}
      fee={2.5}
    />
  );

  const inputEUR = getByTestId('input_EUR') as HTMLInputElement;
  const inputGBP = getByTestId('input_GBP') as HTMLInputElement;

  // Assert
  expect(inputEUR.value).toBe('€ 3,484.98');
  expect(inputGBP.value).toBe('£ 3,000.00');

  expect(container).toMatchSnapshot();
});

test('Converter pound to euro with different rate', () => {
  // Arrange
  const { getByTestId, container } = render(
    <Converter
      defaultCurrency="GBP"
      defaultValue={2000}
      eurToGbpRate={0.89067}
      fee={2.5}
    />
  );

  const inputEUR = getByTestId('input_EUR') as HTMLInputElement;
  const inputGBP = getByTestId('input_GBP') as HTMLInputElement;

  // Assert
  expect(inputEUR.value).toBe('€ 2,243.00');
  expect(inputGBP.value).toBe('£ 2,000.00');

  expect(container).toMatchSnapshot();
});

test('Converter pound to euro with different fee', () => {
  // Arrange
  const { getByTestId, container } = render(
    <Converter
      defaultCurrency="GBP"
      defaultValue={2000}
      eurToGbpRate={0.86022}
      fee={10}
    />
  );

  const inputEUR = getByTestId('input_EUR') as HTMLInputElement;
  const inputGBP = getByTestId('input_GBP') as HTMLInputElement;

  // Assert
  expect(inputEUR.value).toBe('€ 2,314.99');
  expect(inputGBP.value).toBe('£ 2,000.00');

  expect(container).toMatchSnapshot();
});

test('Converter euro to pound dynamic', () => {
  // Arrange
  const { getByTestId, container } = render(
    <Converter
      defaultCurrency="EUR"
      defaultValue={2000}
      eurToGbpRate={0.86022}
      fee={2.5}
    />
  );

  const inputEUR = getByTestId('input_EUR') as HTMLInputElement;
  const inputGBP = getByTestId('input_GBP') as HTMLInputElement;

  // Act
  inputEUR.value = '€ 3,000.00';
  fireEvent.change(inputEUR);

  // Assert
  expect(inputGBP.value).toBe('£ 2,578.16');

  expect(container).toMatchSnapshot();
});

test('Converter euro to pound dynamic with different fee', () => {
  // Arrange
  const { getByTestId, container } = render(
    <Converter
      defaultCurrency="EUR"
      defaultValue={2000}
      eurToGbpRate={0.86022}
      fee={10}
    />
  );

  const inputEUR = getByTestId('input_EUR') as HTMLInputElement;
  const inputGBP = getByTestId('input_GBP') as HTMLInputElement;

  // Act
  inputEUR.value = '€ 3,000.00';
  fireEvent.change(inputEUR);

  // Assert
  expect(inputGBP.value).toBe('£ 2,570.66');

  expect(container).toMatchSnapshot();
});

test('Converter euro to pound dynamic with different rate', () => {
  // Arrange
  const { getByTestId, container } = render(
    <Converter
      defaultCurrency="EUR"
      defaultValue={2000}
      eurToGbpRate={0.89067}
      fee={2.5}
    />
  );

  const inputEUR = getByTestId('input_EUR') as HTMLInputElement;
  const inputGBP = getByTestId('input_GBP') as HTMLInputElement;

  // Act
  inputEUR.value = '€ 3,000.00';
  fireEvent.change(inputEUR);

  // Assert
  expect(inputGBP.value).toBe('£ 2,669.51');

  expect(container).toMatchSnapshot();
});


test('Converter pound to euro dynamic', () => {
  // Arrange
  const { getByTestId, container } = render(
    <Converter
      defaultCurrency="GBP"
      defaultValue={2000}
      eurToGbpRate={0.86022}
      fee={2.5}
    />
  );

  const inputEUR = getByTestId('input_EUR') as HTMLInputElement;
  const inputGBP = getByTestId('input_GBP') as HTMLInputElement;

  // Act
  inputGBP.value = '£ 3,000.00';
  fireEvent.change(inputGBP);

  // Assert
  expect(inputEUR.value).toBe('€ 3,484.98');

  expect(container).toMatchSnapshot();
});

test('Converter pound to euro dynamic with different fee', () => {
  // Arrange
  const { getByTestId, container } = render(
    <Converter
      defaultCurrency="GBP"
      defaultValue={2000}
      eurToGbpRate={0.86022}
      fee={10}
    />
  );

  const inputEUR = getByTestId('input_EUR') as HTMLInputElement;
  const inputGBP = getByTestId('input_GBP') as HTMLInputElement;

  // Act
  inputGBP.value = '£ 3,000.00';
  fireEvent.change(inputGBP);

  // Assert
  expect(inputEUR.value).toBe('€ 3,477.48');

  expect(container).toMatchSnapshot();
  
});

test('Converter pound to euro dynamic with different rate', () => {
  // Arrange
  const { getByTestId, container } = render(
    <Converter
      defaultCurrency="GBP"
      defaultValue={2000}
      eurToGbpRate={0.89067}
      fee={2.5}
    />
  );

  const inputEUR = getByTestId('input_EUR') as HTMLInputElement;
  const inputGBP = getByTestId('input_GBP') as HTMLInputElement;

  // Act
  inputGBP.value = '£ 3,000.00';
  fireEvent.change(inputGBP);

  // Assert
  expect(inputEUR.value).toBe('€ 3,365.75');

  expect(container).toMatchSnapshot();
});
