/**
 * i18n message
 */
export interface ParameterizedI18nMessage {
  readonly message: string;
  readonly parameters?: Record<string, unknown>;
}
