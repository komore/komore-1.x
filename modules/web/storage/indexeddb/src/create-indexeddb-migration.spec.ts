import type { Observable } from 'rxjs';
import { of } from 'rxjs';
import { createIDBMigration } from './create-indexeddb-migration';

describe('Create IndexedDB migration', () => {
  it('creates an IndexedDB migration object', () => {
    given: 'a version and script'
    const version = 1;
    const script = (_: IDBDatabase): Observable<void> => of(undefined);
    when: 'creating an IndexedDB migration'
    const idbMigration = createIDBMigration(version, script);
    then: 'an IndexedDB migration object is properly created'
    expect(idbMigration.version).toBe(version);
    expect(idbMigration.script).toBe(script);
  });
});
