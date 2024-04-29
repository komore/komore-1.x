import { isErrorOfType } from '@komore/error';
import { childProcessOutputToStdout, executeChildProcess, nodeProcessError } from '@komore/node/process';
import { map, throwIfError } from '@komore/reactive';
import { stringToLine, stringToMatchesWith } from '@komore/string';

import { type GitCliClient } from './git-cli-client';
import { type GitCliClientOptions } from './git-cli-client-options';
import { gitCliError } from './git-cli.error';

/**
 * Creates a Git CLI client
 *
 * @param clientOptions Git CLI client options
 * @returns Git CLI client
 */
export function createGitCliClient(clientOptions: GitCliClientOptions): GitCliClient {
  type Matches = readonly [matched: string, option: string] | null;
  const toMatches = stringToMatchesWith<Matches>(/^error: unknown option `([^']+)'$/);
  const { commandName = 'git', workingDirectory } = clientOptions;
  const baseArguments: ReadonlyArray<string> = ['--no-pager'];

  return commandParameters => {
    const args = [...baseArguments, ...commandParameters];
    return executeChildProcess(commandName, { arguments: args, workingDirectory }).pipe(
      map(childProcessOutputToStdout),
      throwIfError(isErrorOfType(nodeProcessError.executionError), error => {
        const { stderr } = error.context;
        if (stderr.startsWith('error: unknown option')) {
          const firstLine = stringToLine(1)(stderr) ?? '';
          const matches = toMatches(firstLine);
          if (matches) {
            const [, option] = matches;
            return gitCliError.unknownOption({ option });
          } else {
            console.log(`but why ||${stderr}||`);
          }
        } else {
          console.log(`git stderr ||${stderr}||`);
        }

        return gitCliError.unhandledError({ message: `${error}` });
      })
    );
  };
}
