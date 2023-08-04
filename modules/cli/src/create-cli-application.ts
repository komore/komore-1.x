import { bgRedBright, redBright } from 'chalk';

import { isInstanceOf } from '@komore/functional';
import { catchError, catchErrorIf, defaultIfEmpty, deferPromise, map, mergeMap, of } from '@komore/reactive';
import { type WorkspaceExecutorTaskId } from '@komore/schematics';

import { type CliApplication } from './cli-application';
import { CliError } from './cli-error';
import { type CliOptions } from './cli-options';
import { cliCommandByName } from './command/cli-command-by-name';
import { unknownCliCommand } from './log/cli-logs';

/**
 * Creates a CLI application
 *
 * @param options CLI options
 * @returns CLI application
 */
export function createCliApplication(options: CliOptions): CliApplication {
  const { logger } = options;

  return argv => {
    const commandLineArguments = argv[0]?.includes('node') ? argv.slice(1) : argv;
    const [_bin, commandName] = commandLineArguments;
    if (commandName === undefined) {
      throw new Error('TODO: no command name in executeCli');
    }

    const command = options.commands.find(cliCommandByName(commandName)) ?? 'build';
    if (command === undefined) {
      logger(unknownCliCommand({ commandName }));
      return of(1);
    }

    if (command === 'build') {
      return deferPromise(() => import('@komore/linting/schematics')).pipe(
        mergeMap(({ createLintModuleExecutor }) => createLintModuleExecutor({ logger })),
        mergeMap(workspaceExecutor => {
          /*const options$ = of({
            entryPoint: 'modules/collection/src/index.ts',
            outputPath: './tmp-test-esbuild/collection',
            tsConfig: 'modules/collection/collection.tsconfig.library.json',
            sourceMap: false,
            watch: false,
          }); <= build*/
          const options$ = of({
            eslintConfig: 'modules/collection/.eslintrc.json',
            filesPattern: 'src/**/*.ts',
            tsConfig: 'modules/collection/tsconfig.json',
            taskId: 'test' as WorkspaceExecutorTaskId,
            watch: false,
          });
          return workspaceExecutor(options$);
        }),
        map(() => 0)
      );
    }

    const result$ = command(commandLineArguments.slice(2)).pipe(
      defaultIfEmpty(0),
      catchErrorIf(isInstanceOf(CliError), error => {
        console.log(`Error: ${error}`, error);
        return of(error.exitCode);
      }),
      catchError(error => {
        const errorMessage = error instanceof Error ? error.message : (error as string);
        const message = bgRedBright(' ERROR ') + ' ' + redBright(errorMessage);
        console.log(message);
        return of(1);
      })
    );

    return result$;
  };
}
