import { type PathLike } from 'node:fs';

import { createErrorType, errorProperties } from '@komore/error';

import { nodeFileSystemDomain } from './node-file-system.domain';

/**
 * Node file system error
 */
export const nodeFileSystemError = createErrorType(nodeFileSystemDomain, {
  fileNotFound: errorProperties<{ filePath: PathLike }>(),
});
