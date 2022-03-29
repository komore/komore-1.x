import { type Observable } from '@komore/reactive';

/**
 * CLI command
 */
export interface CliCommand<CommandName extends string> {
  (argv: ReadonlyArray<string>): Observable<number>;
  readonly aliases: ReadonlyArray<string>;
  readonly commandName: CommandName;
  readonly description: string;
  readonly usage: string;
}
