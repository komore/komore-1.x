import { feature } from '@komore/testing';

import { createIndexedDBDatabase } from './create-indexeddb-database';

feature('Create database', {
  'SKIP: creates a cold observable'() {
    createIndexedDBDatabase({
      name: 'lala',
    });
  },
  'SKIP: creates a database upon subscription'() {
    createIndexedDBDatabase({
      name: 'lala',
    });
  },
  'SKIP: closes the database when the last subscription closes'() {
    createIndexedDBDatabase({
      name: 'lala',
    });
  },
});
