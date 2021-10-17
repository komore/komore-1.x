import 'fake-indexeddb/auto';
import { lastValueFrom } from '@komore/reactive';
import { deleteIndexedDBDatabase } from './delete-indexeddb-database';

describe.only('Delete database', () => {
  const indexedDBDeleteDatabase = jest.spyOn(indexedDB, 'deleteDatabase');

  beforeEach(() => {
    indexedDBDeleteDatabase.mockClear();
  });

  it('creates a cold observable', () => {
    when: 'calling deleteDatabase';
    deleteIndexedDBDatabase('test-name');
    expect: 'indexedDB.deleteDatabase not to have been called if there was no subscription';
    expect(indexedDBDeleteDatabase).not.toHaveBeenCalled();
  });

  it('deletes a database on subscription', async () => {
    when: 'deleting a database';
    const deleteIndexedDB$ = deleteIndexedDBDatabase('test-name');
    await lastValueFrom(deleteIndexedDB$);
    expect: 'indexedDB.deleteDatabase to have been called';
    expect(indexedDBDeleteDatabase).toHaveBeenCalledTimes(1);
    expect(indexedDBDeleteDatabase).toHaveBeenCalledWith('test-name');
  });
});
