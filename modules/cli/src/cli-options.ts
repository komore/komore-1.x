import { type CliCommand } from './command/cli-command';

/**
 * CLI options
 */
export interface CliOptions {
  /**
   * Commands
   */
  readonly commands: ReadonlyArray<CliCommand<string>>;
}
