import { resolve } from 'node:path';

import { createEsbuildPlugin, type EsbuildPlugin } from '@komore/esbuild/plugin';
import { typeScriptConfigurationToPaths, type TypeScriptConfiguration } from '@komore/tsc';

/**
 * Creates a browser server esbuild resolver plugin
 *
 * @param typeScriptConfiguration TypeScript configuration
 * @returns Browser server esbuild resolver plugin
 */
export function createBrowserServerEsbuildResolverPlugin(
  typeScriptConfiguration: TypeScriptConfiguration
): EsbuildPlugin {
  const paths = typeScriptConfigurationToPaths(typeScriptConfiguration);
  const filter = /.+/;
  return createEsbuildPlugin({
    name: '@komore/browser/server',
    setup: pluginBuild => {
      pluginBuild.onResolve({ filter }, args => {
        const path = paths[args.path];
        if (path === undefined) {
          return null;
        }

        console.log(`hm "${args.path}" => "${path}"`);

        return {
          path: resolve('c:/git/komore/komore', path),
        };
      });
    },
  });
}
