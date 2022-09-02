import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Twilio from './Twilio';

describe('<Twilio />', () => {
  test('it should mount', () => {
    render(<Twilio />);
    
    const twilio = screen.getByTestId('Twilio');

    expect(twilio).toBeInTheDocument();
  });
});