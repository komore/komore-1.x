/**
 * Observability metadata
 */
export type ObservabilityMetadata = Readonly<{
  /**
   * Correlation identifier
   */
  correlationId: string;

  /**
   * Time when the message processing ended
   */
  endTime?: Date;

  /**
   * Span identifier
   */
  spanId: string;

  /**
   * Time when the message processing started
   */
  startTime: Date;

  /**
   * Trace identifier
   */
  traceId: string;
}>;
