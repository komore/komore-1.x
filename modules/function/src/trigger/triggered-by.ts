import { map, tapNext } from '@komore/reactive';

import { type FunctionTrigger } from './function-trigger';
import { type FunctionTriggerInputType } from './function-trigger-input-type';
import { type FunctionTriggerOutputType } from './function-trigger-output-type';
import { type FunctionTriggerTriggerType } from './function-trigger-trigger-type';
import { type TriggeredByHandler } from './triggered-by-handler';

export function triggeredBy<
  FunctionTriggers extends ReadonlyArray<FunctionTrigger<unknown, unknown, unknown>>,
  OutputType extends FunctionTriggerOutputType<FunctionTriggers[number]>,
>(
  ...functionTriggersAndHandler: readonly [...FunctionTriggers, TriggeredByHandler<FunctionTriggers, OutputType>]
): (parameters$: Observable<FunctionTriggerInputType<FunctionTriggers[number]>>) => Observable<OutputType> {
  const [functionTriggers, handler] = splitTriggersAndHandler(functionTriggersAndHandler);
  return parameters$ =>
    parameters$.pipe(
      tapNext(x => console.log('parameters', functionTriggers, x)),
      map(() => {
        return void 0 as unknown as OutputType;
      })
    );
}

function splitTriggersAndHandler<
  FunctionTriggers extends ReadonlyArray<FunctionTrigger<unknown, unknown, unknown>>,
  OutputType extends FunctionTriggerOutputType<FunctionTriggers[number]>,
>(
  triggersAndHandler: readonly [...FunctionTriggers, TriggeredByHandler<FunctionTriggers, OutputType>]
): readonly [
  functionTriggers: FunctionTriggers,
  handler: (input$: Observable<FunctionTriggerTriggerType<FunctionTriggers[number]>>) => Observable<OutputType>,
] {
  const functionTriggers = triggersAndHandler.slice(0, triggersAndHandler.length - 1) as unknown as FunctionTriggers;
  const handler = triggersAndHandler[triggersAndHandler.length - 1] as TriggeredByHandler<FunctionTriggers, OutputType>;
  return [functionTriggers, handler];
}
