import { feature } from '@komore/testing';

import { type FileHandle } from 'fs/promises';
import { mock } from 'jest-mock-extended';
import { closeFile } from './close-file';

feature('Close file', () => {
  it.skip('todo', () => {
    const fileHandle = mock<FileHandle>();
    closeFile(fileHandle);
  });
});
