/**
 * Unit localization options
 */
export interface UnitLocalizationOptions {
  readonly format?: Pick<
    Intl.NumberFormatOptions,
    | 'minimumIntegerDigits'
    | 'minimumFractionDigits'
    | 'maximumFractionDigits'
    | 'minimumSignificantDigits'
    | 'maximumSignificantDigits'
    | 'localeMatcher'
    | 'useGrouping'
    | 'unitDisplay'
  >;
}
