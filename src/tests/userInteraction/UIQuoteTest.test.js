/* eslint-disable no-unused-expressions */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('3) User clicks on Quote button', () => {
  it('the quote page rendered correctly', () => {
    render(<App />);
    userEvent.click(screen.getByRole('link', { name: /quote/i }));
    expect(screen.getByRole('heading', { name: /mathematics is not about numbers, equations, computaions, or algorithms: it is about understanding\. william paul thurston/i })).toBeInTheDocument;
  });
});
