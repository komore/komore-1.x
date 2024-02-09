import { isErrorOfType } from '@komore/error';
import { executeChildProcess, nodeProcessError } from '@komore/node/process';
import { throwIfError } from '@komore/reactive';
import { string}

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
  const { commandLine = 'git', workingDirectory } = clientOptions;
  const baseArguments: ReadonlyArray<string> = [];

  return commandParameters => {
    const command = [commandLine, ...baseArguments, ...commandParameters].join(' ');
    return executeChildProcess(command, { workingDirectory }).pipe(
      throwIfError(isErrorOfType(nodeProcessError.executionError), error => {
        const { stderr } = error.context;
        console.log('dafuq, stderr', stderr);
        if (stderr.startsWith('error: unknown option')) {
          const firstLine = stringTo
          type Matches = readonly [matches: string, option: string] | null;
          const matches = stderr.match(/^error: unknown option `([^']+)'$/) as Matches;
          if (matches !== null) {
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
