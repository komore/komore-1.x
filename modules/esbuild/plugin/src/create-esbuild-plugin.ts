import { firstValueFrom } from '@komore/reactive';

import { type EsbuildPlugin } from './esbuild-plugin';
import { type EsbuildPluginOptions } from './esbuild-plugin-options';

/**
 * Creates an esbuild plugin
 *
 * @param pluginOptions esbuild plugin options
 * @returns esbuild plugin
 */
export function createEsbuildPlugin(pluginOptions: EsbuildPluginOptions): EsbuildPlugin {
  const { name, setup } = pluginOptions;
  return {
    name,
    setup: pluginBuild => {
      const result = setup(pluginBuild);
      return result !== undefined ? firstValueFrom(result) : void 0;
    },
  };
}
