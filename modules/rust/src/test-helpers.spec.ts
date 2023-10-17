import { type FileChange } from '@nrwl/devkit';

/**
 * Returns a function that returns true when a file change matches a path
 * @param path Path
 * @returns Function that returns true when a file change matches the path
 */
export function changeByPath(path: string): (fileChange: FileChange) => boolean {
  return fileChange => fileChange.path === path;
}
