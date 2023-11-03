import { bgRedBright, redBright } from 'chalk';

import { type GenericCommand } from '@komore/command';
import { isErrorOfType } from '@komore/error';
import { catchError, catchErrorIf, defaultIfEmpty, map, mapTo, mergeMap, of, toArray } from '@komore/reactive';

import { argvToCommandLineArguments } from './argument/argv-to-command-line-arguments';
import { type CliApplication } from './cli-application';
import { type CliApplicationOptions } from './cli-application-options';
import { cliApplicationSetup } from './cli-application-setup';
import { cliError } from './cli.error';

/**
 * Creates a CLI application
 *
 * @param options CLI options
 * @returns CLI application
 */
export function createCliApplication<CommandType extends GenericCommand>(
  options: CliApplicationOptions<CommandType>
): CliApplication {
  const { commandHandler, parameters, logger: _ } = options;

  return argv =>
    cliApplicationSetup.pipe(
      mapTo(argv),
      map(argvToCommandLineArguments),
      mergeMap(parameters),
      mergeMap(command =>
        commandHandler(command).pipe(
          defaultIfEmpty(0),
          catchErrorIf(isErrorOfType(cliError), error => {
            console.log(`Error: ${error}`, error);
            return of(error.exitCode);
          }),
          catchError(error => {
            const errorMessage = error instanceof Error ? error.message : (error as string);
            const message = bgRedBright(' ERROR ') + ' ' + redBright(errorMessage);
            console.log(message);
            return of(1);
          })
        )
      ),
      toArray(),
      mapTo(0)
    );
}

/*          return deferPromise(() => import('@komore/linting/schematics')).pipe(
            mergeMap(({ createLintModuleExecutor }) => createLintModuleExecutor({ logger })),
            mergeMap(workspaceExecutor => {
              /*const options$ = of({
              entryPoint: 'modules/collection/src/index.ts',
              outputPath: './tmp-test-esbuild/collection',
              tsConfig: 'modules/collection/collection.tsconfig.library.json',
              sourceMap: false,
              watch: false,
            }); <= build
              const options$ = of({
                eslintConfig: 'modules/collection/.eslintrc.json',
                filesPattern: 'src/**/ /**.ts',
                tsConfig: 'modules/collection/tsconfig.json',
                taskId: 'test' as WorkspaceExecutorTaskId,
                watch: false,
              });
              return workspaceExecutor(options$);
            }),*/
