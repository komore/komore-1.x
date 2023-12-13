import { type TargetConfiguration } from '@nrwl/devkit';
import { pluginPackageName } from '../plugin/plugin-package-name';

/**
 * Creates a test target configuration
 * @returns Test target configuration
 */
export function createTestTargetConfiguration(): TargetConfiguration {
  return {
    executor: `${pluginPackageName}:test`,
    options: {},
  };
}
