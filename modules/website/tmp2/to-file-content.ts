import { deferPromise, type Observable } from '@komore/reactive';
import { readFile } from 'fs/promises';

export function toFileContent(fileName: string): Observable<string> {
  return deferPromise(() => readFile(fileName, { encoding: 'utf-8' }));
}
