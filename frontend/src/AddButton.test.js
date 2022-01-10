import { render, screen } from '@testing-library/react';
import App from './App';

test('Checks for add button', () => {
  render(<App />);
  const add_button = screen.getAllByText("Add")[0];
  expect(add_button).toBeInTheDocument();
});
