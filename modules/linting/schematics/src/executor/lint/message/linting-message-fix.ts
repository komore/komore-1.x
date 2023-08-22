import { type LintingMessageRange } from './linting-message-range';

/**
 * Linting message fix
 */
export interface LintingMessageFix {
  /**
   * Fix range
   */
  readonly range: LintingMessageRange;
  /**
   * Fix text
   */
  readonly text: string;
}
