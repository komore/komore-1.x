import { ESLint, type Linter } from 'eslint';
import { resolve } from 'path';

import { jsonToObject } from '@komore/json';
import { readFileContent } from '@komore/node';
import { endWith, fromArray, fromPromise, map, mergeMap, startWith, tapNext, type Observable } from '@komore/reactive';
import { createWorkspaceExecutorEvent, type GenericWorkspaceExecutorEvent } from '@komore/schematics';

import { eslintResultToLintResultMessages } from './eslint-result-to-linting-messages';
import { lintingMessageToWorkspaceExecutorEvent } from './linting-message-to-workspace-executor-event';
import { type LintModuleOptions } from './lint-module-options';

/**
 * Lints a module
 *
 * @param options Lint module options
 * @returns
 */
export function lintModule(options: LintModuleOptions): Observable<GenericWorkspaceExecutorEvent> {
  const { paths, taskId } = options;
  const { eslintConfig, filesPattern, tsConfig: _tsconfig } = paths;
  const basePath = resolve('modules/collection');
  // TODO: watch the file instead?
  return readFileContent(eslintConfig, 'utf-8').pipe(
    map(jsonToObject<Linter.Config>()),
    map(linterConfigToPreparedLinterConfig(basePath)),
    map(overrideConfig => new ESLint({ cwd: basePath, overrideConfig })),
    mergeMap(eslint => fromPromise(eslint.lintFiles(filesPattern))),
    tapNext(res => console.log('res', res)),
    mergeMap(results => fromArray(results.flatMap(eslintResultToLintResultMessages))),
    map(lintingMessageToWorkspaceExecutorEvent(taskId)),
    startWith(createWorkspaceExecutorEvent('task.begin', { taskId })),
    endWith(createWorkspaceExecutorEvent('task.end', { taskId }))
  );
}

function linterConfigToPreparedLinterConfig(basePath: string): (linterConfig: Linter.Config) => Linter.Config {
  return ({ overrides = [], ...config }) => {
    const tsOverride = overrides.find(override => override.files.includes('*.ts'));
    return {
      ...config,
      overrides:
        tsOverride !== undefined
          ? overrides.map(override => (override === tsOverride ? override : override))
          : [
              ...overrides,
              {
                files: ['*.ts'],
                parserOptions: {
                  ecmaVersion: 'latest',
                  // TODO: resolve
                  project: `${basePath}/*.tsconfig.*.json`,
                  sourceType: 'module',
                },
              },
            ],
    };
  };
}
