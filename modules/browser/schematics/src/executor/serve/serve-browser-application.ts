import { createBrowserServer } from '@komore/browser/server';
import { EMPTY, endWith, mergeMap, startWith, type Observable } from '@komore/reactive';
import { createServerHttpHeader } from '@komore/http';
import { createWorkspaceExecutorEvent, type GenericWorkspaceExecutorEvent } from '@komore/schematics';

import { type ServeBrowserApplicationOptions } from './serve-browser-application-options';

/**
 * Serves a browser application
 *
 * @param options Serve browser application options
 * @returns Stream of workspace executor events
 */
export function serveBrowserApplication(
  options: ServeBrowserApplicationOptions
): Observable<GenericWorkspaceExecutorEvent> {
  const {
    http: { host, port },
    paths,
    taskId,
    watch: _watch,
  } = options;
  const { indexHtml, rootPath, tsConfig: tsConfigPath } = paths;

  console.log('bout to serve a browser app', options);

  return createBrowserServer({
    headers: { default: [createServerHttpHeader(`@komore/browser/schematics`)] },
    host,
    paths: {
      indexHtml,
      rootPath,
      tsConfigPath,
    },
    port,
  }).pipe(
    mergeMap(_httpServer =>
      EMPTY.pipe(
        startWith(createWorkspaceExecutorEvent('task.begin', { taskId })),
        endWith(createWorkspaceExecutorEvent('task.end', { taskId }))
      )
    )
  );
}
