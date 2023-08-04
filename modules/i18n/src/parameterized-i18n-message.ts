import { type ReadonlyRecord } from '@komore/typescript';

/**
 * Parameterized i18n message
 */
export interface ParameterizedI18nMessage {
  /**
   * Message key
   */
  readonly key: string;
  /**
   * Message parameters
   */
  readonly parameters?: ReadonlyRecord<string, unknown>;
}
