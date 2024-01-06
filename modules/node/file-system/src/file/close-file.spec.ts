import { type FileHandle } from 'node:fs/promises';

import { feature, mock } from '@komore/testing';

import { closeFile } from './close-file';

feature('Close file', {
  todo() {
    const fileHandle = mock<FileHandle>();
    closeFile(fileHandle);
  },
});
