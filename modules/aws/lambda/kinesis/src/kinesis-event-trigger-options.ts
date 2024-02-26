/**
 * Kinesis event trigger options
 */
export interface KinesisEventTriggerOptions<Batched extends boolean = false> {
  /**
   * Whether records are processed as a batch or individually
   *
   * @note Defaults to `false`
   */
  readonly batched?: Batched;
}
