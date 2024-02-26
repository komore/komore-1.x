/**
 * Lambda trigger options
 *
 * @template EventType Event type
 * @template ResultType Result type
 */
export interface LambdaTriggerOptions<EventType, ResultType> {
  readonly processor: (input$: Observable<EventType>) => Observable<ResultType>;
  readonly test: (input: unknown) => EventType | false | Observable<EventType | false>;
}
