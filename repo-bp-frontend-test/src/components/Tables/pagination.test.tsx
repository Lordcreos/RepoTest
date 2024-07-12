import {  vi } from 'vitest'; 
import { Pagination } from './pagination';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Pagination', () => {

  it('renders correct number of page buttons', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />);

    expect(screen.getAllByRole('button')).toHaveLength(5); 
  });

  it('calls onPageChange when page button clicked', () => {
    const handlePageChange = vi.fn();
    render(<Pagination currentPage={1} totalPages={5} onPageChange={handlePageChange} />);

    fireEvent.click(screen.getAllByRole('button')[2]);

    expect(handlePageChange).toHaveBeenCalledWith(3);
  });

});