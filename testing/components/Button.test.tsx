import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi,  } from 'vitest';

import Button from '../../src/components/layout/Button';

describe('Button component', () => {
  it('renders button with label', () => {
    render(<Button label='Click me' />);
    expect(screen.getAllByText('Click me')).toHaveLength(1);
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button label='Click click' onClick={handleClick} />);
    const button = screen.getByText('Click click');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn();
    render(<Button label='Click click me' onClick={handleClick} />);
    const button = screen.getByText('Click click me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disabled button does not call onClick handler', async () => {
    const handleClick = vi.fn();
    render(<Button label='Click me me' onClick={handleClick} disabled />);
    const button = screen.queryByText('Click me me');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});