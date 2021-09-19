/**
 * Percentage localization options
 */
export interface PercentageLocalizationOptions {
  readonly format?: Pick<
    Intl.NumberFormatOptions,
    | 'minimumIntegerDigits'
    | 'minimumFractionDigits'
    | 'maximumFractionDigits'
    | 'minimumSignificantDigits'
    | 'maximumSignificantDigits'
    | 'localeMatcher'
    | 'useGrouping'
  >;
}
