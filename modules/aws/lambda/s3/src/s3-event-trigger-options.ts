/**
 * S3 event trigger options
 */
export interface S3EventTriggerOptions<Batched extends boolean = false> {
  /**
   * Whether records are processed as a batch or individually
   *
   * @note Defaults to `false`
   */
  readonly batched?: Batched;
}
