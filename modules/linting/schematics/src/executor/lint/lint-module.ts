import { type Linter } from 'eslint';
import { dirname } from 'node:path';

import { createEsLintClient, esLintCommand } from '@komore/eslint';
import { eventToProperties } from '@komore/event';
import { jsonToObject } from '@komore/json';
import { observeFileContent, readFileContent } from '@komore/node/file-system';
import { endWith, filter, fromArray, map, mergeMap, startWith, switchMap } from '@komore/reactive';
import { createWorkspaceExecutorEvent, type GenericWorkspaceExecutorEvent } from '@komore/schematics';

import { linterConfigToPreparedLinterConfig } from './linter-config-to-prepared-linter-config';
import { type LintModuleOptions } from './lint-module-options';
import { lintingMessageToWorkspaceExecutorEvent } from './message/linting-message-to-workspace-executor-event';
import { eslintResultToLintingMessages } from './result/eslint-result-to-linting-messages';
import { eslintResultWithIssues } from './result/eslint-result-with-issues';

/**
 * Lints a module
 *
 * @param options Lint module options
 * @returns Stream of workspace executor events
 */
export function lintModule(options: LintModuleOptions): Observable<GenericWorkspaceExecutorEvent> {
  const { paths, taskId, watch } = options;
  const { eslintConfig, filesPattern, tsConfig } = paths;
  const basePath = dirname(eslintConfig);
  // TODO: watchFileContent + run ESLint in watch mode
  const fileContent$ = watch
    ? observeFileContent(eslintConfig, { encoding: 'utf-8' })
    : readFileContent(eslintConfig, { encoding: 'utf-8' });
  return fileContent$.pipe(
    map(jsonToObject<Linter.Config>()),
    map(linterConfigToPreparedLinterConfig(tsConfig)),
    map(overrideConfig => createEsLintClient({ basePath, overrideConfig })),
    switchMap(esLintClient =>
      esLintClient(esLintCommand.lintFiles({ filePatterns: [filesPattern] })).pipe(
        map(eventToProperties),
        mergeMap(({ results }) => fromArray(results)),
        filter(eslintResultWithIssues),
        map(eslintResultToLintingMessages),
        mergeMap(lintingMessages => fromArray(lintingMessages)),
        map(lintingMessageToWorkspaceExecutorEvent(taskId)),
        startWith(createWorkspaceExecutorEvent('task.begin', { taskId })),
        endWith(createWorkspaceExecutorEvent('task.end', { taskId }))
      )
    )
  );
}
