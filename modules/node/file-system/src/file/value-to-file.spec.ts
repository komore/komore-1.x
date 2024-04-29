import { type FileHandle } from 'node:fs/promises';

import { feature } from '@komore/testing';

import { valueToFile } from './value-to-file';

feature('Value to file', {
  todo() {
    given: 'todo';
    valueToFile(undefined as unknown as FileHandle);
  },
});
