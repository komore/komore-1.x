import { of } from '@komore/reactive';
import { feature } from '@komore/testing';

import { createIDBMigration } from './create-indexeddb-migration';

feature('Create IndexedDB migration', {
  'creates an IndexedDB migration object'() {
    given: 'a version and script';
    const version = 1;
    const script: Parameters<typeof createIDBMigration>[1] = () => of(undefined);

    when: 'creating an IndexedDB migration';
    const idbMigration = createIDBMigration(version, script);

    then: 'an IndexedDB migration object is properly created';
    idbMigration.version === version;
    idbMigration.script === script;
  },
});
