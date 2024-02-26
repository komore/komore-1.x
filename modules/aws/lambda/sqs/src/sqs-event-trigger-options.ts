/**
 * SQS event trigger options
 *
 * @template Batched Whether records are batched
 */
export interface SqsEventTriggerOptions<Batched extends boolean = false> {
  /**
   * Whether records are processed as a batch or individually
   *
   * @note Defaults to `false`
   */
  readonly batched?: Batched;
}
