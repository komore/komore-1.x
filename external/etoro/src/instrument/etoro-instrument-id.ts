/**
 * eToro instrument identifier
 */
export type EToroInstrumentId = number & {
  readonly __tag_eToroInstrumentId: unique symbol;
};
