import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders Login text as heading', () => {
  render(<Login />);
  const text = screen.getAllByText(/Login/i);
  expect(text).toBeInTheDocument();
});
