import { type Logger } from '@komore/logging';

/**
 * OpenTofu client options
 */
export interface OpenTofuClientOptions {
  /**
   * Logger
   */
  readonly logger: Logger;
  /**
   * Working directory
   */
  readonly workingDirectory: string;
}
