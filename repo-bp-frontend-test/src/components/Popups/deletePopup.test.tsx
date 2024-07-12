import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DeletePopup } from './deletePopup';
import { vi } from 'vitest';

describe('DeletePopup Component', () => {
  it('renders the title and buttons', () => {
    const titleText = 'Delete Confirmation';
    const primaryButtonTitle = 'Delete';
    const { getByText } = render(
      <DeletePopup
        title={titleText}
        primaryButtonTitle={primaryButtonTitle}
        handleActionMenu={() => {}}
        handleCloseMenu={() => {}}
      />
    );

    const titleElement = getByText(titleText);
    const deleteButton = getByText(primaryButtonTitle);
    const cancelButton = getByText('Cancelar');

    expect(titleElement).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it('calls handleActionMenu when primary button is clicked', () => {
    const handleActionMenu = vi.fn();
    const { getByText } = render(
      <DeletePopup
        title="Delete Confirmation"
        primaryButtonTitle="Delete"
        handleActionMenu={handleActionMenu}
        handleCloseMenu={() => {}}
      />
    );

    const deleteButton = getByText('Delete');
    fireEvent.click(deleteButton);

    expect(handleActionMenu).toHaveBeenCalledTimes(1);
  });

  it('calls handleCloseMenu when cancel button is clicked', () => {
    const handleCloseMenu = vi.fn();
    const { getByText } = render(
      <DeletePopup
        title="Delete Confirmation"
        primaryButtonTitle="Delete"
        handleActionMenu={() => {}}
        handleCloseMenu={handleCloseMenu}
      />
    );

    const cancelButton = getByText('Cancelar');
    fireEvent.click(cancelButton);

    expect(handleCloseMenu).toHaveBeenCalledTimes(1);
  });
});
