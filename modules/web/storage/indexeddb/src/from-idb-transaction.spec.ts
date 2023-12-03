import { feature } from '@komore/testing';

import { fromIDBTransaction } from './from-idb-transaction';

feature('From IndexedDB transaction', {
  'builds an observable from an IDBTransaction'() {
    given: 'an IndexedDB transaction';
    const idbTransaction = mock<IDBTransaction>();

    when: 'building an observable from the transaction';
    fromIDBTransaction(idbTransaction);
  },
});
