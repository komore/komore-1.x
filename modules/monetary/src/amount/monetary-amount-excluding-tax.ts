import { createMonetaryAmount } from './create-monetary-amount';
import { type MonetaryAmount } from './monetary-amount';
import { type MonetaryAmountWithTax } from './monetary-amount-with-tax';

/**
 * Returns a monetary amount without the applied tax
 *
 * @param monetaryAmount Monetary amount with tax
 * @returns Monetary amount with the tax subtracted
 */
export function monetaryAmountExcludingTax(monetaryAmount: MonetaryAmountWithTax): MonetaryAmount {
  const { amount, currencyCode, tax } = monetaryAmount;
  const excludingTax = Number(amount) - Number(tax);
  return createMonetaryAmount(excludingTax, currencyCode);
}
