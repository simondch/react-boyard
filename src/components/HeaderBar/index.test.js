import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import HeaderBar from './';

test('render with Hello world text', () => {
  render(
    <Router>
      <HeaderBar title="title" />
    </Router>
  );
});
