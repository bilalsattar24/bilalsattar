import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome to text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to/i);
  expect(linkElement).toBeInTheDocument();
});
