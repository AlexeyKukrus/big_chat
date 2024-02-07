import { render, screen } from '@testing-library/react';
import Button from '@/components/Button';

test('renders button with correct text', () => {
  render(<Button text="Click me" />);
  const buttonElement = screen.getByText('Click me');
  expect(buttonElement).toBeInTheDocument();
});