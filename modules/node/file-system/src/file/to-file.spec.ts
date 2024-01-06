import { type FileHandle } from 'node:fs/promises';

import { feature } from '@komore/testing';

import { toFile } from './to-file';

feature('To file', {
  todo() {
    given: 'todo';
    toFile(undefined as unknown as FileHandle);
  },
});
