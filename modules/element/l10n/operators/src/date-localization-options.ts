/**
 * Date localization options
 */
export interface DateLocalizationOptions {
  readonly format?: Pick<
    Intl.DateTimeFormatOptions,
    | 'dateStyle'
    | 'day'
    | 'era'
    | 'formatMatcher'
    | 'localeMatcher'
    | 'month'
    | 'timeZone'
    | 'timeZoneName'
    | 'weekday'
    | 'year'
  >;
}
