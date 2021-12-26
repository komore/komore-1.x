import { type Locales } from './locales';
import { type PercentageLocalizationOptions } from './options/percentage-localization-options';

/**
 * Creates a function that localizes a number to a percentage format using a set of locales
 * @param locales Locales
 * @param options Percentage localization options
 * @returns Function that localizes a number to a percentage format using the set of locales
 */
export function toLocalizedPercentage(
  locales: Locales,
  options?: PercentageLocalizationOptions
): (value: number) => string {
  const numberFormatOptions: Intl.NumberFormatOptions = {
    ...options,
    style: 'percent'
  };
  const numberFormat = new Intl.NumberFormat([...locales], numberFormatOptions);
  return value => numberFormat.format(value);
}
