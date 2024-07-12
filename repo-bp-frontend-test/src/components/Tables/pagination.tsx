import { FC } from 'react';
import { Button } from '../Buttons/button';
import './table.css';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    const middlePage = Math.min(
      Math.max(currentPage, 3), // Evitar que la página actual sea menor que 3
      totalPages - 2 // Evitar que la página actual sea mayor que (totalPages - 2)
    );

    // Calcular los números de página para mostrar
    for (let i = middlePage - 2; i <= middlePage + 2; i++) {
      if (i >= 1 && i <= totalPages) {
        pageNumbers.push(
          <li key={i} className={i === currentPage ? 'active-page' : ''}>
            <Button type='pagination' title={`${i}`} action={() => handlePageChange(i)} />
          </li>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <main className='pagination-container'>
      <ul className="pagination-ul">
        {renderPageNumbers()}
      </ul>
    </main>
  );
};
