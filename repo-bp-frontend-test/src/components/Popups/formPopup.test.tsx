import { fireEvent, render, screen } from '@testing-library/react';
import { FormPopup } from './formPopup';
import { vi } from 'vitest';

describe('FormPopup', () => {

  it('renders the title', () => {
    render(<FormPopup title="Add Product" primaryButtonTitle='Enviar' handleCloseMenu={() => {}} />);

    expect(screen.getByRole('heading')).toHaveTextContent('Add Product');
  });

  it('renders the ProductForm component', () => {
    render(<FormPopup title="Add Product"  primaryButtonTitle='Enviar' handleCloseMenu={() => {}} />);

    expect(screen.getByText('Nombre:')).toBeInTheDocument();
  });



  it('passes productToUpdate to ProductForm', () => {
    const product ={
      "id": "qwe-12",
      "name": "VIsa Joven 2",
      "description": "Visa para nuevos Tarjea Vivientes",
      "logo": "https://img.freepik.com/vector-gratis/diseno-tarjeta-credito-realista_23-2149126090.jpg?size=626&ext=jpg",
      "date_release": "2023-09-10T00:00:00.000+00:00",
      "date_revision": "2024-09-10T00:00:00.000+00:00"
  }
    render(<FormPopup title="Edit Product" primaryButtonTitle=''  selectedProduct = {product}   handleCloseMenu={() => {}} />);

    expect(screen.getByLabelText('Nombre:')).toHaveValue('VIsa Joven 2');
  });

});