import { dirname } from 'node:path';

/**
 * Returns a path's directory name
 *
 * @param path Path
 * @returns Directory name
 */
export function pathToDirectoryName(path: string): string {
  return dirname(path);
}
