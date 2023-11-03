import { type Observable } from '@komore/reactive';

import { readBlobAsText } from './read-blob-as-text';

/**
 * Creates a function that reads a blob as text using a file reader
 *
 * @param fileReader File reader
 * @param encoding Encoding
 * @returns Function that reads a blob as text using the file reader
 */
export function blobToText(fileReader?: FileReader, encoding?: string): (blob: Blob) => Observable<string> {
  return blob => readBlobAsText(blob, encoding, fileReader);
}
