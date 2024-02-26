import { type FunctionTrigger } from './function-trigger';

/**
 * Function trigger output type
 *
 * @template FunctionTriggerOutputType Function trigger output type
 */
export type FunctionTriggerOutputType<FunctionTriggerType extends FunctionTrigger<any, any, any>> =
  FunctionTriggerType extends FunctionTrigger<any, any, infer OutputType> ? OutputType : never;
