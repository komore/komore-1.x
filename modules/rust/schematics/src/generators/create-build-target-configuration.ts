import { type TargetConfiguration } from '@nrwl/devkit';
import { pluginPackageName } from '../plugin/plugin-package-name';

/**
 * Creates a build target configuration
 * @returns Build target configuration
 */
export function createBuildTargetConfiguration(): TargetConfiguration {
  return {
    executor: `${pluginPackageName}:build`,
    options: {},
  };
}
