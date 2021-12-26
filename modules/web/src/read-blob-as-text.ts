import { defer, fromEvent, map, type Observable } from '@komore/reactive';

export function readBlobAsText(blob: Blob, encoding?: string, fileReader?: FileReader): Observable<string> {
  return defer(() => {
    const reader = fileReader ?? new FileReader();
    const loaded = fromEvent(reader, 'load').pipe(map(() => reader.result as string));
    reader.readAsText(blob, encoding);
    return loaded;
  });
}
