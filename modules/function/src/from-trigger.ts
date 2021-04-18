import type { Observable } from '@komore/reactive';
import type { FunctionTrigger } from './function-trigger';

export function fromTrigger<
  FunctionTriggerTypes extends FunctionTrigger<any, any, any>[]>(
  [functionTriggers, project]: [...functionTriggers: FunctionTriggerTypes, project: (functionParameters$: Observable<any>) => Observable<any>]
) {
for (const functionTrigger of functionTriggers) {

}

  return functionParameters$ => functionParameters$.pipe();
}
