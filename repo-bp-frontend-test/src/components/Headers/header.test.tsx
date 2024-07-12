import { render, screen } from '@testing-library/react';
import Header from './header';

describe('Header', () => {

  it('renders without crashing', () => {
    render(<Header />);
  });

  it('renders the logo image', () => {
    render(<Header />);
    expect(screen.getByAltText('Banco Pichincha logo')).toBeInTheDocument();
  });

  it('renders the logo image with the correct src', () => {
    render(<Header />);
    expect(screen.getByAltText('Banco Pichincha logo')).toHaveAttribute('src', '/src/assets/PichinchaLogo.svg'); 
  });

  it('applies the correct className to the logo image', () => {
    render(<Header />);
    expect(screen.getByAltText('Banco Pichincha logo')).toHaveClass('logo');
  });

});