import { type Locales } from './locales';
import { type DecimalLocalizationOptions } from './options/decimal-localization-options';

/**
 * Creates a function that localizes a number to a decimal format using a set of locales
 * @param locales Locales
 * @param options Decimal localization options
 * @returns Function that localizes a temporal to a decimal format using the set of locales
 */
export function toLocalizedDecimal(locales: Locales, options?: DecimalLocalizationOptions): (value: number) => string {
  const numberFormatOptions: Intl.NumberFormatOptions = {
    ...options,
    style: 'decimal'
  };
  const numberFormat = new Intl.NumberFormat([...locales], numberFormatOptions);
  return value => numberFormat.format(value);
}
