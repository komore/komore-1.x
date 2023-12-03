import { type Logger } from '@komore/logging';

/**
 * OpenTofu command handler options
 */
export interface OpenTofuCommandHandlerOptions {
  /**
   * Working directory
   */
  readonly workingDirectory: string;
}
