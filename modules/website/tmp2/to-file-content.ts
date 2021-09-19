import { readFile } from 'fs/promises';
import type { Observable } from 'rxjs';
import { defer } from 'rxjs';

export function toFileContent(fileName: string): Observable<string> {
  return defer(() => readFile(fileName, { encoding: 'utf-8' }));
}
