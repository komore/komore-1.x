import { names } from '@nrwl/devkit';

/**
 * Builds a project directory name
 * @param directory Directory
 * @param fileName File name
 * @returns Project directory name
 */
export function buildProjectDirectoryName(directory: string | undefined, fileName: string): string {
  if (directory === undefined) {
    return fileName;
  }

  const directoryNames = names(directory);
  return `${directoryNames.fileName}/${fileName}`;
}
