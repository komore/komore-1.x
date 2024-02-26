import { type FunctionTrigger } from './function-trigger';
import { type FunctionTriggerOutputType } from './function-trigger-output-type';
import { type FunctionTriggerTriggerType } from './function-trigger-trigger-type';

/**
 * Triggered by handler
 *
 * @template FunctionTriggers Function trigger types
 * @template OutputType Output type
 */
export interface TriggeredByHandler<
  FunctionTriggers extends ReadonlyArray<FunctionTrigger<unknown, unknown, unknown>>,
  OutputType extends FunctionTriggerOutputType<FunctionTriggers[number]>,
> {
  (input$: Observable<FunctionTriggerTriggerType<FunctionTriggers[number]>>): Observable<OutputType>;
}
