/**
 * Seconds since epoch
 */
export type SecondsSinceEpoch = number & {
  readonly __tag_temporalSecondsSinceEpochNumber: unique symbol;
};
