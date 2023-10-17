import { addProjectConfiguration, type Tree } from '@nrwl/devkit';
import { createBuildTargetConfiguration } from '../create-build-target-configuration';
import { createFormatTargetConfiguration } from '../create-format-target-configuration';
import { createLintTargetConfiguration } from '../create-lint-target-configuration';
import { createTestTargetConfiguration } from '../create-test-target-configuration';
import { type ApplicationOptions } from './application-options';

/**
 * Returns a function that adds a application project configuration to a tree
 * @param tree Tree
 * @returns Function that adds a application project configuration to the tree
 */
export function applicationProjectConfigurationTo(tree: Tree): (applicationOptions: ApplicationOptions) => void {
  return ({ name, root }) =>
    addProjectConfiguration(tree, name, {
      projectType: 'application',
      root,
      sourceRoot: `${root}/src`,
      targets: {
        build: createBuildTargetConfiguration(),
        format: createFormatTargetConfiguration(),
        lint: createLintTargetConfiguration(),
        test: createTestTargetConfiguration(),
      },
    });
}
