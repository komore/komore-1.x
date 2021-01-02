import { mock, MockProxy } from 'jest-mock-extended';
import { CONNECTION } from './connection';

declare var global: any;

describe('Connection', () => {
  let mockConnection: MockProxy<typeof globalThis.navigator.connection> & typeof globalThis.navigator.connection;

  beforeEach(() => {
    mockConnection = mock();
    Object.defineProperty(global.navigator, 'connection', mockConnection);
  });

  it('works', () => {
    CONNECTION.subscribe(x => console.log('x', x));
  });
});
