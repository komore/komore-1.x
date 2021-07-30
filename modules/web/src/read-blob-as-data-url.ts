import type { Observable } from '@komore/reactive';
import { defer, fromEvent } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

/**
 * TODO
 * @param blob 
 * @param fileReader 
 * @returns 
 */
export function readBlobAsDataUrl(blob: Blob, fileReader?: FileReader): Observable<string> {
  return defer(() => {
    const reader = fileReader ?? new FileReader();
    const loaded = fromEvent(reader, 'load').pipe(map(() => reader.result as string));
    reader.readAsDataURL(blob);
    return loaded;
  });
}
