import { monetaryError } from '../../monetary.error';
import { type MonetaryAmount } from '../monetary-amount';

/**
 * Creates a function that tests whether a monetary amount is greater than a specific amount
 *
 * @param amount Amount to compare with
 * @returns Function that tests whether a monetary amount is greater than a specific amount
 */
export function isMonetaryAmountGreaterThan(
  amount: number | MonetaryAmount
): (monetaryAmount: MonetaryAmount) => boolean {
  const [lhsAmount, lhsCurrencyCode] =
    typeof amount === 'number' ? [amount, undefined] : [Number(amount.amount), amount.currencyCode];
  return ({ amount, currencyCode: rhsCurrencyCode }) => {
    if (lhsCurrencyCode !== undefined && lhsCurrencyCode !== rhsCurrencyCode) {
      throw monetaryError.currencyCodeMismatch({ lhsCurrencyCode, rhsCurrencyCode });
    }

    const rhsAmount = Number(amount);
    return lhsAmount < rhsAmount;
  };
}
