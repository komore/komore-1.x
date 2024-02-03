import { defer, fromEvent, map } from '@komore/reactive';

/**
 * TODO
 *
 * @param blob
 * @param fileReader
 * @returns
 */
export function readBlobAsDataUrl(blob: Blob, fileReader?: FileReader): Observable<URL> {
  return defer(() => {
    const reader = fileReader ?? new FileReader();
    const loaded = fromEvent(reader, 'load').pipe(map(() => new URL(reader.result as string)));
    reader.readAsDataURL(blob);
    return loaded;
  });
}
