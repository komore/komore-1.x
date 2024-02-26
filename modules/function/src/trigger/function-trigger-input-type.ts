import { type FunctionTrigger } from './function-trigger';

/**
 * Function trigger input type
 *
 * @template FunctionTriggerInputType Function trigger input type
 */
export type FunctionTriggerInputType<FunctionTriggerType extends FunctionTrigger<any, any, any>> =
  FunctionTriggerType extends FunctionTrigger<infer InputType, any, any> ? InputType : never;
