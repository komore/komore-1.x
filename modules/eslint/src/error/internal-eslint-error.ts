import { type InternalEsLintErrorDataTypes } from './internal-eslint-error-data-types';

/**
 * Internal ESLint error
 *
 * @template MessageTemplate Message template
 * @private
 */
export interface InternalEsLintError<MessageTemplate extends keyof InternalEsLintErrorDataTypes> extends Error {
  /**
   * Message data
   */
  readonly messageData: InternalEsLintErrorDataTypes[MessageTemplate];
  /**
   * Message template
   */
  readonly messageTemplate: MessageTemplate;
}
