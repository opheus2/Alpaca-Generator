import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Alpaca Text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Alpaca Generator/i);
  expect(linkElement).toBeInTheDocument();
});
