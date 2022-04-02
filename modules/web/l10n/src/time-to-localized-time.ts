import { Temporal } from '@js-temporal/polyfill';
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
export function timeToLocalizedTime(
  locales: string | Locales,
  options?: TimeLocalizationOptions
): (temporal: TemporalWithTime) => string {
  const format = options?.format ?? { timeStyle: 'medium' };
  const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
    ...format,
  };
  const localesOption = typeof locales !== 'string' ? [...locales] : locales;
  const dateTimeFormat = new Intl.DateTimeFormat(localesOption, dateTimeFormatOptions);
  return temporal => {
    // TODO: remove when Intl.DateTimeFormat supports Temporal
    const dateTimeTemporal = temporal instanceof Temporal.PlainTime ? temporal.toPlainDateTime('1970-01-01') : temporal;
    const date = toJavaScriptDate(dateTimeTemporal);
    return dateTimeFormat.format(date);
  };
}
