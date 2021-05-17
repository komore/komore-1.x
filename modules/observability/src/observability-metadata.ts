/**
 * Observability metadata
 */
export interface ObservabilityMetadata {
  /**
   * Correlation identifier
   */
  readonly correlationId: string;
  /**
   * Time when the message processing ended
   */
  readonly endTime?: Date;
  /**
   * Span identifier
   */
  readonly spanId: string;
  /**
   * Time when the message processing started
   */
  readonly startTime: Date;
  /**
   * Trace identifier
   */
  readonly traceId: string;
}
