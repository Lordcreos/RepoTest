import { render, cleanup, fireEvent } from '@testing-library/react';
import { Button } from './button';

describe('Button component', () => {
  afterEach(cleanup);

  it('renders a primary button', () => {
    const { getByText } = render(<Button title="Primary" action={() => {}} type="primary" />);
    const button = getByText('Primary');

    expect(button).toHaveClass('primary-button');
  });

  it('renders a disabled button', () => {
    const { getByText } = render(<Button title="Disabled" action={() => {}} disabled type="primary" />);
    const button = getByText('Disabled');

    expect(button).toHaveClass('primary-button disabled-button');
    expect(button).toBeDisabled();
  });

  it('calls the action callback when clicked', () => {
    const actionMock = () => {
      return 'clicked';
    };
    const { getByText } = render(<Button title="Click Me" action={actionMock} type="primary" />);
    const button = getByText('Click Me');
    button.click();
  });
});
