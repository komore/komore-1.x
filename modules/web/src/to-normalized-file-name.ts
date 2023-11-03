/**
 * TODO: rename and move to a more relevant module
 *
 * @param fileName
 * @returns
 */
export function toNormalizedFileName(fileName: string): string {
  return fileName.normalize('NFD').replace(/[\u0300-\u036f-\u2019]/g, '');
}
