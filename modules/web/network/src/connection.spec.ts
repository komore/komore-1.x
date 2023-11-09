import { feature } from '@komore/testing';

import { mock, type MockProxy } from 'jest-mock-extended';

import { connection } from './connection';

feature('Connection', () => {
  let mockConnection: MockProxy<typeof globalThis.navigator.connection> & typeof globalThis.navigator.connection;

  beforeEach(() => {
    mockConnection = mock();
    Object.defineProperty(navigator, 'connection', mockConnection);
  });

  it('works', () => {
    connection.subscribe(x => console.log('x', x));
  });
});
