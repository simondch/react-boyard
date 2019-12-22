import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './';

test('render with Hello world text', () => {
  const { getByTestId } = render(<Header text="Hello world" />);
  expect(getByTestId('header-h1').textContent).toBe('Hello world');
});
