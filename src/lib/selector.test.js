import Selector from '$lib/components/chat/ModelSelector/Selector.svelte';
import { user, MODEL_DOWNLOAD_POOL, models, starredModels } from '$lib/stores';
import { render, fireEvent } from '@testing-library/svelte';

jest.mock('../store', () => {
    return {
      starredModels: {
        subscribe: jest.fn(() => {
          return { unsubscribe: jest.fn() };
        }),
        update: jest.fn()
      }
    };
  });

  describe('Selector Component', () => {
   
    test('toggleStar updates the starred models state', async () => {
      const { getByTestId, component } = render(Selector);
      const starButton = getByTestId('star-button'); 

      await fireEvent.click(starButton);
  
      expect(starredModels.update).toHaveBeenCalledWith(expect.any(Function));
      
    });
  });