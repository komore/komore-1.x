import { mock } from 'jest-mock-extended';
import { fromIDBTransaction } from './from-idb-transaction';

describe('From IndexedDB transaction', () => {
  it('builds an observable from an IDBTransaction', () => {
    // given: an IndexedDB transaction
    const idbTransaction = mock<IDBTransaction>();
    // when: building an observable from the transaction
    fromIDBTransaction(idbTransaction);
  });
});
