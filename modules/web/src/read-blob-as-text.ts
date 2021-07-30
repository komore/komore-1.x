import type { Observable } from '@komore/reactive';
import { defer, fromEvent } from '@komore/reactive';
import { map } from '@komore/reactive/operators';

export function readBlobAsText(blob: Blob, encoding?: string, fileReader?: FileReader): Observable<string> {
  return defer(() => {
    const reader = fileReader ?? new FileReader();
    const loaded = fromEvent(reader, 'load').pipe(map(() => reader.result as string));
    reader.readAsText(blob, encoding);
    return loaded;
  });
}
