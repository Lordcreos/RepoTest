import { render, screen } from '@testing-library/react';
import { ProductForm } from './productForm';

describe('ProductForm', () => {

  it('renders without crashing', () => {
    render(<ProductForm />);
  });

  it('renders the product name input', () => {
    render(<ProductForm />);
    expect(screen.getByLabelText('Nombre:')).toBeInTheDocument();
  });

  it('renders the submit button', () => {
    render(<ProductForm />); 
    expect(screen.getByText('Enviar')).toBeInTheDocument();
  });

  it('renders the reset button', () => {
    render(<ProductForm />);
    expect(screen.getByText('Reiniciar')).toBeInTheDocument();
  });

  it('disables submit button if there are errors', () => {
    render(<ProductForm />);
    expect(screen.getByText('Enviar')).toHaveClass('disabled-button');
  });
});