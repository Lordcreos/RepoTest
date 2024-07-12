import { render, fireEvent } from '@testing-library/react';
import { TableFooter } from './tableFooter';
import { vi } from 'vitest';

describe('TableFooter Component', () => {
  it('renders the result count and select dropdown', () => {
    const setResultsPerPage = vi.fn();
    const data = [
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

    const { getByText, getByRole } = render(
      <TableFooter setResultsPerPage={setResultsPerPage} data={data} />
    );

    expect(getByText('2 Resultados')).toBeInTheDocument();
    const selectDropdown = getByRole('combobox');
    expect(selectDropdown).toBeInTheDocument();
  });

  it('calls setResultsPerPage when select option changes', () => {
    const setResultsPerPage = vi.fn();
    const data =  [
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

    const { getByRole } = render(
      <TableFooter setResultsPerPage={setResultsPerPage} data={data} />
    );

    const selectDropdown = getByRole('combobox');
    fireEvent.change(selectDropdown, { target: { value: '10' } });

    expect(setResultsPerPage).toHaveBeenCalledWith(10);
  });
});
