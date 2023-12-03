import { type Logger } from '@komore/logging';

/**
 * OpenTofu client options
 */
export interface OpenTofuClientOptions {
  /**
   * Working directory
   */
  readonly workingDirectory: string;
}
