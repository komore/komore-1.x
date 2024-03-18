import { feature, mock } from '@komore/testing';

import { fromIDBRequest } from './from-idb-request';

feature('From IndexedDB request', {
  'builds an observable from an IDBRequest'() {
    given: 'an IndexedDB request';
    const idbRequest = mock<IDBRequest>();
    when: 'building an observable from the request';
    /*const idbRequest$ =*/ fromIDBRequest(idbRequest);
  },
});
