import { createIndexedDBDatabase } from './create-indexeddb-database';

describe('Create database', () => {
  it.skip('creates a cold observable', () => {
    createIndexedDBDatabase({
      name: 'lala'
    });
  });

  it.skip('creates a database upon subscription', () => {
    createIndexedDBDatabase({
      name: 'lala'
    });
  });

  it.skip('closes the database when the last subscription closes', () => {
    createIndexedDBDatabase({
      name: 'lala'
    });
  });
});
