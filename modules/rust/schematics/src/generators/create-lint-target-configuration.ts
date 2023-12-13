import { type TargetConfiguration } from '@nrwl/devkit';
import { pluginPackageName } from '../plugin/plugin-package-name';

/**
 * Creates a lint target configuration
 * @returns Lint target configuration
 */
export function createLintTargetConfiguration(): TargetConfiguration {
  return {
    executor: `${pluginPackageName}:lint`,
    options: {
      fix: false,
      noDependencies: true,
      warningAsError: false,
    },
  };
}
