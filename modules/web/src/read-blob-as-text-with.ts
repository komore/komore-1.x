import type { Observable } from '@komore/reactive';
import { readBlobAsText } from './read-blob-as-text';

/**
 * Creates a function that reads a blob as text using a file reader
 * @param fileReader File reader
 * @returns Function that reads a blob as text using the file reader
 */
export function readBlobAsTextWith(fileReader: FileReader): (blob: Blob, encoding?: string) => Observable<string> {
  return (blob, encoding) => readBlobAsText(blob, encoding, fileReader);
}
