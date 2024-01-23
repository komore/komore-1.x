/**
 * eToro currency identifier
 */
export type EToroCurrencyId = number & {
  readonly __tag_eToroCurrencyId: unique symbol;
};
