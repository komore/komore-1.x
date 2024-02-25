import { eventToProperties } from '@komore/event';
import { jsonToObject } from '@komore/json';
import { observeFileContent, readFileContent } from '@komore/node/file-system';
import { endWith, filter, fromArray, map, mergeMap, startWith, switchMap } from '@komore/reactive';
import { createWorkspaceExecutorEvent, type GenericWorkspaceExecutorEvent } from '@komore/schematics';
import { createTestRunner } from '@komore/testing/runner';

import { type TestModuleOptions } from './test-module-options';

/**
 * Tests a module
 *
 * @param options Test module options
 * @returns Stream of workspace executor events
 */
export function testModule(options: TestModuleOptions): Observable<GenericWorkspaceExecutorEvent> {
  const { paths, taskId, watch } = options;
  const { filesPattern, tsConfig } = paths;
  // TODO: watchFileContent + run tests in watch mode
  const fileContent$ = watch
    ? observeFileContent(estestConfig, { encoding: 'utf-8' })
    : readFileContent(estestConfig, { encoding: 'utf-8' });
  const testRunner = createTestRunner();
  return fileContent$.pipe(
    map(jsonToObject<Tester.Config>()),
    map(testerConfigToPreparedTesterConfig(tsConfig)),
    map(overrideConfig => createEsTestClient({ basePath, overrideConfig })),
    switchMap(esTestClient =>
      esTestClient(esTestCommand.testFiles({ filePatterns: [filesPattern] })).pipe(
        map(eventToProperties),
        mergeMap(({ results }) => fromArray(results)),
        filter(estestResultWithIssues),
        map(estestResultToTestingMessages),
        mergeMap(testingMessages => fromArray(testingMessages)),
        map(testingMessageToWorkspaceExecutorEvent(taskId)),
        startWith(createWorkspaceExecutorEvent('task.begin', { taskId })),
        endWith(createWorkspaceExecutorEvent('task.end', { taskId }))
      )
    )
  );
}
