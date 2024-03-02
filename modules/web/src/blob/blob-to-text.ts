import { defer, fromEvent, map } from '@komore/reactive';

/**
 * Creates a function that reads a blob as text using a file reader
 *
 * @param fileReader File reader
 * @param encoding Encoding
 * @returns Function that reads a blob as text using the file reader
 */
export function blobToText(fileReader?: FileReader, encoding?: string): (blob: Blob) => Observable<string> {
  const reader = fileReader ?? new FileReader();

  return blob =>
    defer(() => {
      const loaded = fromEvent(reader, 'load').pipe(map(() => reader.result as string));
      reader.readAsText(blob, encoding);
      return loaded;
    });
}
