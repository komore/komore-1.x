import { type Observable } from '@komore/reactive';

import { readBlobAsDataUrl } from './read-blob-as-data-url';

/**
 * Creates a function that returns a blob as a data URL
 *
 * @param fileReader File reader
 * @returns Data URL
 */
export function blobToDataUrl(fileReader?: FileReader): (blob: Blob) => Observable<URL> {
  return blob => readBlobAsDataUrl(blob, fileReader);
}
