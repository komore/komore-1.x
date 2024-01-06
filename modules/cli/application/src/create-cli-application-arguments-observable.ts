import { deferValue, type Observable } from '@komore/reactive';

export function createCliApplicationArgumentsObservable(): Observable<ReadonlyArray<string>> {
  return deferValue(() => process.argv);
}
