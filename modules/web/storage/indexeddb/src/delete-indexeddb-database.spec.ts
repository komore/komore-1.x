import 'fake-indexeddb/auto';
import { lastValueFrom } from '@komore/reactive';
import { calls, feature } from '@komore/testing';

import { deleteIndexedDBDatabase } from './delete-indexeddb-database';

feature('Delete database', () => {
  const indexedDBDeleteDatabase = jest.spyOn(indexedDB, 'deleteDatabase');

  beforeEach(() => {
    indexedDBDeleteDatabase.mockClear();
  });

  return {
    'creates a cold observable'() {
      when: 'calling deleteDatabase';
      deleteIndexedDBDatabase('test-name');
      expect: 'indexedDB.deleteDatabase not to have been called if there was no subscription';
      calls(indexedDBDeleteDatabase) === 0;
    },
    async 'deletes a database on subscription'() {
      when: 'deleting a database';
      const deleteIndexedDB$ = deleteIndexedDBDatabase('test-name');
      await lastValueFrom(deleteIndexedDB$);

      expect: 'indexedDB.deleteDatabase to have been called';
      calls(indexedDBDeleteDatabase) === 1;
      calls(indexedDBDeleteDatabase).parameters == ['test-name'];
    },
  };
});
