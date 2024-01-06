import { mergeMap } from '@komore/reactive';
import { createWorkspaceExecutor, createWorkspaceExecutorFactory } from '@komore/schematics';

import { serveBrowserApplication } from './serve-browser-application';
import { type ServeBrowserApplicationExecutorOptions } from './serve-browser-application-executor-options';

/**
 * Serve browser application executor factory
 */
export const createServeBrowserApplicationExecutor =
  createWorkspaceExecutorFactory<ServeBrowserApplicationExecutorOptions>(() =>
    createWorkspaceExecutor(options$ =>
      options$.pipe(
        mergeMap(({ http, taskId, paths, watch }) => serveBrowserApplication({ http, paths, taskId, watch }))
      )
    )
  );
