import { createMonetaryAmount } from './create-monetary-amount';
import { type MonetaryAmount } from './monetary-amount';
import { type MonetaryAmountWithTax } from './monetary-amount-with-tax';

/**
 * Returns the tax as a monetary amount
 *
 * @param monetaryAmount Monetary amount with tax
 * @returns Tax
 */
export function monetaryAmountToTax(monetaryAmount: MonetaryAmountWithTax): MonetaryAmount {
  const { currencyCode, tax } = monetaryAmount;
  return createMonetaryAmount(Number(tax), currencyCode);
}
