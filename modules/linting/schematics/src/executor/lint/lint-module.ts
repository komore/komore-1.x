import { ESLint, type Linter } from 'eslint';
import { dirname } from 'path';

import { jsonToObject } from '@komore/json';
import { readFileContent } from '@komore/node/file-system';
import { endWith, fromArray, fromPromise, map, mergeMap, startWith, type Observable } from '@komore/reactive';
import { createWorkspaceExecutorEvent, type GenericWorkspaceExecutorEvent } from '@komore/schematics';

import { linterConfigToPreparedLinterConfig } from './linter-config-to-prepared-linter-config';
import { type LintModuleOptions } from './lint-module-options';
import { lintingMessageToWorkspaceExecutorEvent } from './message/linting-message-to-workspace-executor-event';
import { eslintResultToLintResultMessages } from './result/eslint-result-to-linting-messages';
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
  console.log('bout to lint a module', options);
  // TODO: watchFileContent + run ESLint in watch mode
  const fileContent$ = watch ? readFileContent(eslintConfig, 'utf-8') : readFileContent(eslintConfig, 'utf-8');
  return fileContent$.pipe(
    map(jsonToObject<Linter.Config>()),
    map(linterConfigToPreparedLinterConfig(tsConfig)),
    map(overrideConfig => new ESLint({ cwd: basePath, overrideConfig })),
    mergeMap(eslint => fromPromise(eslint.lintFiles(filesPattern))),
    map(results => results.filter(eslintResultWithIssues)),
    mergeMap(results =>
      fromArray(results.flatMap(eslintResultToLintResultMessages)).pipe(
        map(lintingMessageToWorkspaceExecutorEvent(taskId))
      )
    ),
    startWith(createWorkspaceExecutorEvent('task.begin', { taskId })),
    endWith(createWorkspaceExecutorEvent('task.end', { taskId }))
  );
}
