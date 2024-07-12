import { render, screen, fireEvent } from '@testing-library/react';
import InputLabel from './inputLabel';
import { vi } from 'vitest';

const onChange = vi.fn(); 

describe('InputLabel', () => {

  it('renders input with correct label', () => {
    render(<InputLabel label="Name" name="name" value="" onChange={onChange} error={undefined} />);
    
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
  });

  it('applies error class when error prop is passed', () => {
    render(<InputLabel label="Email" name="email" value="" onChange={onChange} error="Invalid email" />);
    
    expect(screen.getByLabelText('Email')).toHaveClass('input-error');
  });

  it('shows error message when error prop is passed', () => {
    render(<InputLabel label="Email" name="email" value="" onChange={onChange} error="Invalid email" />);
    
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  it('calls onChange when input changes', () => {
    render(<InputLabel label="Email" name="email" value="" onChange={onChange} error={undefined} />);

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@email.com' } });
    
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('disables input if disabled prop true', () => {
    render(<InputLabel label="Email" name="email" value="" onChange={onChange} error={undefined} disabled />);
    
    expect(screen.getByLabelText('Email')).toBeDisabled();
  });

});