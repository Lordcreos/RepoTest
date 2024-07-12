import { render, screen } from '@testing-library/react';
import { TableHeader } from './tableHeader';

describe('TableHeader', () => {

  it('renders without crashing', () => {
    render(<TableHeader />);
  });

  it('renders the info icon in the description column', () => {
    render(<TableHeader />);
  
    expect(screen.getAllByAltText('Info logo')[0]).toBeInTheDocument();
  });

  it('renders the expected number of columns', () => {
    render(<TableHeader />);
  
    expect(screen.getAllByRole('columnheader')).toHaveLength(6);
  });

  it('applies table-tittle class to column titles', () => {
    render(<TableHeader />);

    expect(screen.getByText('Nombre del producto')).toHaveClass('table-tittle'); 
  });
});