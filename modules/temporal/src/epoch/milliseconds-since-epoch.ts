/**
 * Milliseconds since epoch
 */
export type MillisecondsSinceEpoch = number & {
  readonly __tag_temporalMillisecondsSinceEpoch: unique symbol;
};
