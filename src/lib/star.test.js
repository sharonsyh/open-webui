import { render, fireEvent } from '@testing-library/svelte';
import Star from './Star.svelte';
import '@testing-library/jest-dom';

describe('Star Component', () => {
  it('should toggle filled state on click', async () => {
    const { getByRole } = render(Star);
    const svg = getByRole('img'); // Assuming the role 'img' is applicable, adjust if needed

    expect(svg).toHaveAttribute('fill', 'none');

    await fireEvent.click(svg);

    expect(svg).toHaveAttribute('fill', 'currentColor');

    await fireEvent.click(svg);
 
    expect(svg).toHaveAttribute('fill', 'none');
  });
});
