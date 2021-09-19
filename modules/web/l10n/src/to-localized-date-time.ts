import type { TemporalWithDateTime } from '@komore/temporal';
import { toJavaScriptDate } from '@komore/temporal/compatibility';
import type { Locales } from './locales';
import type { DateTimeLocalizationOptions } from './options/date-time-localization-options';

/**
 * Creates a function that localizes a temporal to a date time format using a set of locales
 * @param locales Locales
 * @param options Date time localization options
 * @returns Function that localizes a temporal to a date time format using the set of locales
 */
export function toLocalizedDateTime(
  locales: Locales,
  options?: DateTimeLocalizationOptions
): (temporal: TemporalWithDateTime) => string {
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
