import { Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDate } from '@komore/temporal';
import { toJavaScriptDate } from '@komore/temporal/compatibility';
import { type Locales } from './locales';
import { type DateLocalizationOptions } from './options/date-localization-options';

/**
 * Creates a function that localizes a temporal to a date format using a set of locales
 * @param locales Locales
 * @param options Date localization options
 * @returns Function that localizes a temporal to a date format using the set of locales
 */
export function dateToLocalizedDate(
  locales: string | Locales,
  options?: DateLocalizationOptions
): (temporal: TemporalWithDate) => string {
  const format = options?.format ?? { dateStyle: 'medium' };
  const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
    ...format,
  };
  const localesOption = typeof locales !== 'string' ? [...locales] : locales;
  const dateTimeFormat = new Intl.DateTimeFormat(localesOption, dateTimeFormatOptions);
  return temporal => {
    // TODO: remove when Intl.DateTimeFormat supports Temporal
    const dateTimeTemporal = temporal instanceof Temporal.PlainDate ? temporal.toPlainDateTime('00:00:00') : temporal;
    const date = toJavaScriptDate(dateTimeTemporal);
    return dateTimeFormat.format(date);
  };
}
