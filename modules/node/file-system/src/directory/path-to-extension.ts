import { extname } from 'node:path';

/**
 * Returns a path's extension
 *
 * @param path Path
 * @returns Extension
 */
export function pathToExtension(path: string): string {
  return extname(path);
}
