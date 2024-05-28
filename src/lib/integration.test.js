import { render, fireEvent } from '@testing-library/svelte';
import Selector from '$lib/components/chat/ModelSelector/Selector.svelte';
import { user, MODEL_DOWNLOAD_POOL, models, starredModels } from '$lib/stores';

jest.mock('$lib/stores', () => {
  return {
    user: {
      subscribe: jest.fn(() => ({ unsubscribe: jest.fn() })),
      update: jest.fn(),
    },
    MODEL_DOWNLOAD_POOL: {
      // Mocking model download pool store
      subscribe: jest.fn(() => ({ unsubscribe: jest.fn() })),
      update: jest.fn(),
    },
    models: {
      // Mocking models store
      subscribe: jest.fn(() => ({ unsubscribe: jest.fn() })),
      update: jest.fn(),
    },
    starredModels: {
      // Mocking starred models store
      subscribe: jest.fn(() => ({ unsubscribe: jest.fn() })),
      update: jest.fn(),
    },
  };
});

describe('Integration Test Suite for Model Selector Component', () => {
  test('Toggle Star Button updates starred models state', async () => {
    // Render the Selector component
    const { getByTestId } = render(Selector);
    const starButton = getByTestId('star-button');

    // Trigger click event on the star button
    await fireEvent.click(starButton);

    // Check if the update function of the starredModels store was called with a function
    expect(starredModels.update).toHaveBeenCalledWith(expect.any(Function));
  });
});
