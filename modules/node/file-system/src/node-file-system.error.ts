import { type PathLike } from 'node:fs';

import { createErrorType, errorProperties } from '@komore/error';
import { nodeDomain } from '@komore/node';

/**
 * Node file system error
 */
export const nodeFileSystemError = createErrorType(nodeDomain, {
  /**
   * File not found
   */
  fileNotFound: errorProperties<{
    /**
     * File path
     */
    readonly filePath: PathLike;
  }>(),
});
