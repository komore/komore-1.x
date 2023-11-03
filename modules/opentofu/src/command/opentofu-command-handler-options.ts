import { type Logger } from '@komore/logging';

/**
 * OpenTofu command handler options
 */
export interface OpenTofuCommandHandlerOptions {
  /**
   * Logger
   */
  readonly logger: Logger;
  /**
   * Working directory
   */
  readonly workingDirectory: string;
}
