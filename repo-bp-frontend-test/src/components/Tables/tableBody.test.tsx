import { fireEvent, render, screen } from '@testing-library/react';
import { TableBody } from './tableBody';

const products = [
    {
        "id": "qwe-12",
        "name": "VIsa Joven 2",
        "description": "Visa para nuevos Tarjea Vivientes",
        "logo": "https://img.freepik.com/vector-gratis/diseno-tarjeta-credito-realista_23-2149126090.jpg?size=626&ext=jpg",
        "date_release": "2023-09-10T00:00:00.000+00:00",
        "date_revision": "2024-09-10T00:00:00.000+00:00"
    },
    {
        "id": "qwe-12",
        "name": "VIsa Joven 3",
        "description": "Visa para nuevos Tarjea Vivientes",
        "logo": "https://img.freepik.com/vector-gratis/diseno-tarjeta-credito-realista_23-2149126090.jpg?size=626&ext=jpg",
        "date_release": "2023-09-10T00:00:00.000+00:00",
        "date_revision": "2024-09-10T00:00:00.000+00:00"
    }
];

describe('TableBody', () => {

  it('renders a row for each product', () => {
    render(<TableBody data={products} 
        UpdateId={() => {}}
        PopupId={() => {}}
        currentPage={1}
        resultsPerPage={5}
        handleDeleteActionButton={() => {}}
        handleEditActionButton={() => {}} />);

    expect(screen.getAllByRole('row')).toHaveLength(2);
  });

  it('renders the product name in each row', () => {
    render(<TableBody data={products} 
        UpdateId={() => {}}
        PopupId={() => {}}
        currentPage={1}
        resultsPerPage={5}
        handleDeleteActionButton={() => {}}
        handleEditActionButton={() => {}} />);

    expect(screen.getByText('VIsa Joven 2')).toBeInTheDocument();
    expect(screen.getByText('VIsa Joven 3')).toBeInTheDocument();
  });

});