import { mock/*, MockProxy*/ } from 'jest-mock-extended';
import { fromIDBOpenDBRequest } from './from-idb-open-db-request';

describe('From IndexedDB open database request', () => {
  //let mockOpenIDBRequest: MockProxy<IDBOpenDBRequest> & IDBOpenDBRequest;

  beforeEach(() => {
    //mockOpenIDBRequest = mock<IDBOpenDBRequest>();
  });

  it('emits the database on success', () => {
    // given: an IndexedDB open database request
    const mockIDBDatabase = mock<IDBDatabase>();
    const mockOpenIDBRequest = mock<IDBOpenDBRequest>({
      result: mockIDBDatabase
    });
    // when: creating an observable request
    /*const openIDBRequest$ =*/ fromIDBOpenDBRequest(mockOpenIDBRequest);
    // and: subscribing to it
    // expect: the database to be emitted
    //const idbDatabase = 
  });
});
