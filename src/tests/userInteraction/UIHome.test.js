/* eslint-disable no-unused-expressions */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('2) User clicks on Calculator button', () => {
  it('the Calculator page rendered correctly', () => {
    render(<App />);
    userEvent.click(screen.getByRole('link', { name: /calculator/i }));
    expect(
      screen.getByRole('heading', { name: /let's do some math/i }),
    ).toBeInTheDocument;
  });
});
