import { render, screen } from '@testing-library/react';
import App from './App';

test('Checks for modal close button', () => {
  render(<App />);
  const button_element = screen.getByTestId("modal-close-btn");
  expect(button_element).toBeInTheDocument();
});
