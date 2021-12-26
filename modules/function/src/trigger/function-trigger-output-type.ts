import { type FunctionTrigger } from './function-trigger';

/**
 * Function trigger output type
 * @template FunctionTriggerOutputType Function trigger output type
 */
export type FunctionTriggerOutputType<FunctionTriggerType extends FunctionTrigger<unknown, unknown>> =
  FunctionTriggerType extends FunctionTrigger<unknown, infer OutputType> ? OutputType : never;
