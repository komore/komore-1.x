import { type Observable } from '@komore/reactive';
import { type ReadonlyRecord } from '@komore/typescript';

export interface CliRouter {
  (command: ReadonlyArray<string>, flags: ReadonlyRecord<string, string>): Observable<number>;
}
