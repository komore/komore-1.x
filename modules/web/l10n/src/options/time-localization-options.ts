/**
 * Time localization options
 */
export interface TimeLocalizationOptions {
  readonly format?: Pick<
    Intl.DateTimeFormatOptions,
    'formatMatcher' | 'hour' | 'localeMatcher' | 'minute' | 'second' | 'timeStyle' | 'timeZone' | 'timeZoneName'
  >;
}
