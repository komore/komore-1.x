import { createIndexedDBDatabase } from './create-indexeddb-database';

describe('Create database', () => {
  it.skip('creates a cold observable', () => {
    createIndexedDBDatabase('lala');
  });

  it.skip('creates a database upon subscription', () => {
    createIndexedDBDatabase('lala');
  });

  it.skip('closes the database when the last subscription closes', () => {
    createIndexedDBDatabase('lala');
  });
});
