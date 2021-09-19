/**
 * Currency localization options
 */
export interface CurrencyLocalizationOptions {
  readonly format?: Pick<
    Intl.NumberFormatOptions,
    'currency' | 'currencyDisplay' | 'currencySign' | 'localeMatcher' | 'notation' | 'signDisplay'
  >;
}
