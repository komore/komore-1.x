import { childProcessOutputToStdout, executeChildProcess, nodeProcessError } from '@komore/node/process';
import { type OpenTofuCliClient } from './opentofu-cli-client';
import { type OpenTofuCliClientOptions } from './opentofu-cli-client-options';
import { isErrorOfType } from '@komore/error';
import { map, throwIfError } from '@komore/reactive';

/**
 * Creates an OpenTofu CLI client
 *
 * @param clientOptions OpenTofu CLI client
 * @returns OpenTofu CLI client
 */
export function createOpenTofuCliClient(clientOptions: OpenTofuCliClientOptions): OpenTofuCliClient {
  const { commandLine = 'git', workingDirectory } = clientOptions;
  const baseArguments: ReadonlyArray<string> = ['--no-pager'];

  return commandParameters => {
    const command = [commandLine, ...baseArguments, ...commandParameters].join(' ');
    console.log('cmd', command);
    return executeChildProcess(command, { workingDirectory }).pipe(
      map(childProcessOutputToStdout),
      throwIfError(isErrorOfType(nodeProcessError.executionError), error => {
        const { stderr } = error.context;
        if (stderr.startsWith('error: unknown option')) {
          type Matches = readonly [matches: string, option: string] | null;
          const firstLine = stringToLine(1)(stderr) ?? '';
          const matches = firstLine.match(/^error: unknown option `([^']+)'$/) as Matches;
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
