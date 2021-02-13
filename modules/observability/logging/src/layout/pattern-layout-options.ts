/**
 * Pattern layout options
 */
export interface PatternLayoutOptions {
  readonly date?: Readonly<{
    locales?: ConstructorParameters<typeof Intl.DateTimeFormat>[0],
    options?: ConstructorParameters<typeof Intl.DateTimeFormat>[1]
  }>;
}
