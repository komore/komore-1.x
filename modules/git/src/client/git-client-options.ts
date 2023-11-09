import { type Logger } from '@komore/logging';

/**
 * git client options
 */
export interface GitClientOptions {
  /**
   * Logger
   */
  readonly logger: Logger;
  /**
   * Working directory
   */
  readonly workingDirectory: string;
}
