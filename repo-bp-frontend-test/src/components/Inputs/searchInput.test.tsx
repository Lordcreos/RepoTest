import { render, screen, fireEvent } from '@testing-library/react';
import { InputSearch } from './searchInput';
import { vi } from 'vitest';

const onChange = vi.fn();

describe('InputSearch', () => {

  it('renders the input', () => {
    render(<InputSearch value='' onChange={onChange} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('applies the correct CSS class', () => {
    render(<InputSearch value='' onChange={onChange} />);
    expect(screen.getByRole('textbox')).toHaveClass('input-search');
  });

  it('calls onChange when input changes', () => {
    render(<InputSearch value='' onChange={onChange} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('sets placeholder as default value', () => {
    render(<InputSearch value='' onChange={onChange} />);
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'buscar');
  });

  it('sets custom placeholder if provided', () => {
    render(<InputSearch value='' onChange={onChange} placeholder='Custom placeholder' />);
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Custom placeholder'); 
  });

});