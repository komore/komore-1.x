import type { Observable } from '@komore/reactive';

/**
 * Function trigger
 * @template InputType Input type
 * @template OutputType Output type
 */
export interface FunctionTrigger<InputType, OutputType> {
  test(input: Observable<InputType>): Observable<boolean>;
  handle(input: Observable<InputType>): Observable<OutputType>;
}
