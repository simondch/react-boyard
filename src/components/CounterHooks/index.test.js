import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CounterHooks from './';

test('it render and handle both increment and decrement button click', () => {
  const { getByTestId } = render(<CounterHooks />);
  expect(getByTestId('counter-value').textContent).toBe('1');
  fireEvent.click(getByTestId('decrement-button'));
  expect(getByTestId('counter-value').textContent).toBe('0');
  fireEvent.click(getByTestId('increment-button'));
  expect(getByTestId('counter-value').textContent).toBe('1');
});
