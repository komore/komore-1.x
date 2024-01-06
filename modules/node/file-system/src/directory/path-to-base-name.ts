import { basename } from 'node:path';

/**
 * Returns a path's base name
 *
 * @param path Path
 * @returns Base name
 */
export function pathToBaseName(path: string): string {
  return basename(path);
}
