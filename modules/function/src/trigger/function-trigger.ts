/**
 * Function trigger
 *
 * @template InputType Input type
 * @template TriggerType Trigger type
 * @template OutputType Output type
 */
export interface FunctionTrigger<InputType, TriggerType, OutputType> {
  processor(trigger$: Observable<TriggerType>): Observable<OutputType>;
  test(input: InputType): Observable<TriggerType | false>;
}
