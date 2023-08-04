import { type MonetaryAmount } from './monetary-amount';

/**
 * Monetary amount with tax
 */
export interface MonetaryAmountWithTax extends MonetaryAmount {
  /**
   * Tax as an integer amount in the lowest available unit (e.g. cents)
   */
  readonly tax: `${number}`;
}
