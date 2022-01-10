import { render, screen } from '@testing-library/react';
import App from './App';

test('Checks for add modal to be there', () => {
  render(<App />);
  const modal_element = screen.getByTestId("modal-window");
  expect(modal_element).toBeInTheDocument();
});
