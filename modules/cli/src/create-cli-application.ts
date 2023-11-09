import { bgRedBright, redBright } from 'chalk';

import { type GenericCommand } from '@komore/command';
import { isErrorOfType } from '@komore/error';
import {
  catchError,
  catchErrorIf,
  defaultIfEmpty,
  ignoreValues,
  map,
  mapTo,
  merge,
  mergeMap,
  of,
  Subject,
  take,
  tapNext,
  type Observable,
} from '@komore/reactive';

import { argvToCommandLineArguments } from './argument/argv-to-command-line-arguments';
import { type CliApplication } from './cli-application';
import { type CliApplicationOptions } from './cli-application-options';
import { cliApplicationSetup } from './cli-application-setup';
import { type CliEvent } from './cli.event';
import { cliError } from './cli.error';
import { cliEventToConsole } from './event/cli-event-to-console';

/**
 * Creates a CLI application
 *
 * @param options CLI options
 * @returns CLI application
 */
export function createCliApplication<CommandType extends GenericCommand>(
  options: CliApplicationOptions<CommandType>
): CliApplication {
  const events = new Subject<CliEvent>();
  const toConsole = cliEventToConsole();
  return argv =>
    merge([toConsole(events.asObservable()).pipe(defaultIfEmpty(0)), processCliCommands(argv, events, options)]).pipe(
      take(1),
      tapNext(exitCode => {
        console.log('exit code =', exitCode);
        process.exit(exitCode);
      }),
      ignoreValues()
    );
}

// TODO: move
function processCliCommands<CommandType extends GenericCommand>(
  argv: ReadonlyArray<string>,
  events: Subject<CliEvent>,
  options: CliApplicationOptions<CommandType>
): Observable<number> {
  const { parametersToCommand, logger: _ } = options;
  const handler = options.commandHandler(events);

  return cliApplicationSetup.pipe(
    mapTo(argv),
    map(argvToCommandLineArguments),
    mergeMap(parametersToCommand),
    mergeMap(command =>
      handler(command).pipe(
        ignoreValues(),
        catchErrorIf(isErrorOfType(cliError), error => {
          console.log(`Error: ${error}`, error);
          return of(error.context.exitCode);
        }),
        catchError(error => {
          const errorMessage = error instanceof Error ? error.message : (error as string);
          const message = bgRedBright(' ERROR ') + ' ' + redBright(errorMessage);
          console.log(message);
          return of(1);
        })
      )
    )
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
