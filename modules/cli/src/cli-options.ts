import { type Logger } from '@komore/logging';

import { type CliCommand } from './command/cli-command';

/**
 * CLI options
 */
export interface CliOptions {
  /**
   * Commands
   */
  readonly commands: ReadonlyArray<CliCommand<string>>;
  /**
   * Logger
   */
  readonly logger: Logger;
}
