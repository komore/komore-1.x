/**
 * Function trigger
 *
 * @template InputType Input type
 * @template TriggerType Trigger type
 * @template OutputType Output type
 */
export interface FunctionTrigger<InputType, TriggerType, OutputType> {
  processor(input$: Observable<InputType>): Observable<OutputType>;
  test(input: InputType): TriggerType | false | Observable<TriggerType | boolean>;
}
