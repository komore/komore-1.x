/**
 * Function trigger options
 */
export interface FunctionTriggerOptions<InputType, TriggerType, OutputType> {
  /**
   * Function that receives an input and processes into the expected trigger value
   *
   * @param trigger Trigger value
   * @returns Result
   */
  readonly processor: (trigger: TriggerType) => OutputType | Observable<OutputType>;
  /**
   * Tests whether an input matches the expected trigger type
   *
   * @param input Input value
   * @returns true if the input can be transformed into an expected trigger value
   */
  readonly test: (input: InputType) => TriggerType | false | Observable<TriggerType | false>;
}
