import { resolve } from 'node:path';

import { type ProjectConfiguration } from '@komore/schematics';

import { type ServeBrowserApplicationExecutorOptions } from './serve-browser-application-executor-options';

/**
 * Returns serve browser application executor options, given a project configuration
 *
 * @param projectConfiguration Project configuration
 * @returns Serve browser application executor options
 * @private
 */
export function projectConfigurationToServeBrowserApplicationExecutorOptions(
  projectConfiguration: ProjectConfiguration
): ServeBrowserApplicationExecutorOptions {
  const { name, path } = projectConfiguration;
  const tsConfig = resolve(path, `${name}.tsconfig.application.json`);
  const rootPath = resolve(path, 'src');
  const indexHtml = resolve(rootPath, 'index.html');
  const watch = false;
  return {
    http: {
      host: '127.0.0.1',
      port: '4242',
    },
    paths: {
      indexHtml,
      rootPath,
      tsConfig,
    },
    watch,
  };
}
