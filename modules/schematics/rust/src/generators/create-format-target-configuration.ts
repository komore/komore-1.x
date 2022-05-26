import { type TargetConfiguration } from '@nrwl/devkit';
import { pluginPackageName } from '../plugin/plugin-package-name';

/**
 * Creates a format target configuration
 * @returns Format target configuration
 */
export function createFormatTargetConfiguration(): TargetConfiguration {
  return {
    executor: `${pluginPackageName}:format`,
    options: {},
  };
}
