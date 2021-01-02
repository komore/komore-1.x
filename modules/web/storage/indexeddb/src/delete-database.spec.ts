import 'fake-indexeddb/auto';
import { lastValueFrom } from 'rxjs';
import { deleteDatabase } from './delete-database';

describe.only('Delete database', () => {
  const indexedDBDeleteDatabase = jest.spyOn(indexedDB, 'deleteDatabase');

  beforeEach(() => {
    indexedDBDeleteDatabase.mockClear();
  });

  it('creates a cold observable', () => {
    // when: calling deleteDatabase
    deleteDatabase('test-name');
    // expect: indexedDB.deleteDatabase not to have been called
    expect(indexedDBDeleteDatabase).not.toHaveBeenCalled();
  });

  it('deletes a database on subscription', async () => {
    // when: deleting a database
    await lastValueFrom(deleteDatabase('test-name'));
    // expect: indexedDB.deleteDatabase to have been called
    expect(indexedDBDeleteDatabase).toHaveBeenCalledTimes(1);
    expect(indexedDBDeleteDatabase).toHaveBeenCalledWith('test-name');
  });
});
