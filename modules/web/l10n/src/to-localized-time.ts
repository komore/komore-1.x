import { type TemporalWithTime } from '@komore/temporal';
import { toJavaScriptDate } from '@komore/temporal/compatibility';
import { type Locales } from './locales';
import { type TimeLocalizationOptions } from './options/time-localization-options';

/**
 * Creates a function that localizes a temporal to a time format using a set of locales
 * @param locales Locales
 * @param options Date localization options
 * @returns Function that localizes a temporal to a time format using the set of locales
 */
export function toLocalizedTime(
  locales: Locales,
  options?: TimeLocalizationOptions
): (temporal: TemporalWithTime) => string {
  const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
    ...options?.format
  };
  const dateTimeFormat = new Intl.DateTimeFormat([...locales], dateTimeFormatOptions);
  return temporal => {
    // TODO: remove when Intl.DateTimeFormat supports Temporal
    const date = toJavaScriptDate(temporal);
    return dateTimeFormat.format(date);
  };
}
