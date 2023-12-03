export { argvToCommandLineArguments } from './argument/argv-to-command-line-arguments';
export { type CliApplication } from './cli-application';
export { type CliApplicationOptions } from './cli-application-options';
export { type CliArgumentDefinition } from './command/argument/cli-argument-definition';
export { type CliFlagDefinition } from './command/flag/cli-flag-definition';
export { type CliCommand } from './command/cli-command';
export { type CliCommandContext } from './command/cli-command-context';
export { type CliCommandOptions } from './command/cli-command-options';
export { cliDomain } from './cli.domain';
export { cliError } from './cli.error';
export { cliEvent } from './cli.event';
export { type CliEvent } from './cli.event';
export { type CliParameterDefault } from './command/parameter/cli-parameter-default';
export { type CliParameterTypeName } from './command/parameter/cli-parameter-type-name';
export { createCliApplication } from './create-cli-application';
export { createCliApplicationLogEncoder } from './log/create-cli-application-log-encoder';
export { createCliArgument } from './command/argument/create-cli-argument';
export { createCliCommand } from './command/create-cli-command';
export { createCliFlag } from './command/flag/create-cli-flag';
export { type DisplayedCliMessage } from './display/displayed-cli-message';
export { type DisplayedCliMessageOptions } from './display/displayed-cli-message-options';
export { type DisplayedCliMessageType } from './display/displayed-cli-message-type';
export { displayedCliMessageTypes } from './display/displayed-cli-message-types';
export { executeCliApplication } from './execute-cli-application';

// TODO: move to linter schematics
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
            }),*/
