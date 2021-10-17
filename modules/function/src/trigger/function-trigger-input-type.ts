import type { FunctionTrigger } from './function-trigger';

/**
 * Function trigger input type
 * @template FunctionTriggerInputType Function trigger input type
 */
export type FunctionTriggerInputType<FunctionTriggerType extends FunctionTrigger<unknown, unknown>> =
  FunctionTriggerType extends FunctionTrigger<infer InputType, unknown> ? InputType : never;
