import { mock } from 'jest-mock-extended';
import { fromIDBRequest } from './from-idb-request';

describe('From IndexedDB request', () => {
  it('builds an observable from an IDBRequest', () => {
    // given: an IndexedDB request
    const idbRequest = mock<IDBRequest>();
    // when: building an observable from the request
    /*const idbRequest$ =*/ fromIDBRequest(idbRequest);
  });
});
