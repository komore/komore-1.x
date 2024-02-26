import { type FunctionTrigger } from './function-trigger';

/**
 * Function trigger trigger type
 *
 * @template FunctionTriggerTriggerType Function trigger trigger type
 */
export type FunctionTriggerTriggerType<FunctionTriggerType extends FunctionTrigger<any, any, any>> =
  FunctionTriggerType extends FunctionTrigger<any, infer TriggerType, any> ? TriggerType : never;
