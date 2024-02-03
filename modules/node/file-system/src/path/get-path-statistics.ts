import { type PathLike, type Stats } from 'node:fs';
import { stat } from 'node:fs/promises';

import { deferPromise, throwIfError } from '@komore/reactive';

import { isNodeFileNotFoundError } from '../error/is-node-file-not-found-error';
import { nodeFileSystemError } from '../node-file-system.error';

export function getPathStatistics(path: PathLike): Observable<Stats> {
  return deferPromise(() => stat(path)).pipe(
    throwIfError(isNodeFileNotFoundError, () => nodeFileSystemError.fileNotFound({ filePath: path }))
  );
}
