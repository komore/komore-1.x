import { type LintingMessageFix } from './linting-message-fix';
import { type LintingMessageRange } from './linting-message-range';

/**
 * Linting message
 */
export interface LintingMessage {
  /**
   * Columns
   */
  readonly columns: LintingMessageRange;
  /**
   * File path
   */
  readonly filePath: string;
  /**
   * Fix
   */
  readonly fix?: LintingMessageFix;
  /**
   * Message
   */
  readonly message: string;
  /**
   * Row
   */
  readonly rows: LintingMessageRange;
  /**
   * Rule identifier
   */
  readonly ruleId?: string;
}
