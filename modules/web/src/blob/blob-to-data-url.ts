import { defer, fromEvent, map } from '@komore/reactive';

/**
 * Creates a function that returns a blob as a data URL
 *
 * @param fileReader File reader
 * @returns Function that returns a blob as a data URL
 */
export function blobToDataUrl(fileReader?: FileReader): (blob: Blob) => Observable<URL> {
  const reader = fileReader ?? new FileReader();

  return blob =>
    defer(() => {
      const loaded = fromEvent(reader, 'load').pipe(map(() => new URL(reader.result as string)));
      reader.readAsDataURL(blob);
      return loaded;
    });
}
