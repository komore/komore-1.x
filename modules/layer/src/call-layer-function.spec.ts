import { of } from '@komore/reactive';
import { callLayerFunction } from './call-layer-function';

describe('Call layer function', () => {
  it('can call a layer function', async () => {
    given: 'a layer implementation with a function';
    const 
    const layerFunction = jest.fn(() => of(42));
    when: 'calling the layer function';
    expect: 'the layer function to have been called';

  });
});
