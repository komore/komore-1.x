import { type BuildOptions } from 'esbuild';

import { commandProperties, createCommandType } from '@komore/command';
import { esbuildDomain } from '@komore/esbuild';

/**
 * esbuild command
 */
export const esbuildCommand = createCommandType(esbuildDomain, {
  /**
   * Builds
   *
   * @see {@link https://esbuild.github.io/api/#build Build}
   */
  build: commandProperties<BuildOptions>(),
});
