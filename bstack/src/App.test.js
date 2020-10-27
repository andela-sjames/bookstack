import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/"You don't have any book to read at the moment."/h);
  expect(headerElement).toBeInTheDocument();
});
