import { type DisplayedCliMessageOptions } from './displayed-cli-message-options';

/**
 * Displayed command-line interface message
 */
export interface DisplayedCliMessage {
  /**
   * Message
   */
  readonly message: string;
  /**
   * Options
   */
  readonly options?: DisplayedCliMessageOptions;
}
