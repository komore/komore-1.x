import type { MockProxy } from 'jest-mock-extended';
import { mock } from 'jest-mock-extended';
import { CONNECTION } from './connection';

describe('Connection', () => {
  let mockConnection: MockProxy<typeof globalThis.navigator.connection> & typeof globalThis.navigator.connection;

  beforeEach(() => {
    mockConnection = mock();
    Object.defineProperty(navigator, 'connection', mockConnection);
  });

  it('works', () => {
    CONNECTION.subscribe(x => console.log('x', x));
  });
});
