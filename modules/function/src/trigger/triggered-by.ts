import { type Observable } from '@komore/reactive';
import { type FunctionTrigger } from './function-trigger';
import { type FunctionTriggerInputType } from './function-trigger-input-type';
import { type FunctionTriggerOutputType } from './function-trigger-output-type';

export function triggeredBy<
  FunctionTriggers extends FunctionTrigger<unknown, unknown>[],
  OutputType extends FunctionTriggerOutputType<FunctionTriggers[number]>
>(
  ...functionTriggers: FunctionTriggers,
  project: (input$: Observable<FunctionTriggerInputType<FunctionTriggers[number]>>) => Observable<OutputType>
): Observable<OutputType> {

}

// TODO: for use with createFunction so the function gets a proper signature with the correct Promise<OutputType>
