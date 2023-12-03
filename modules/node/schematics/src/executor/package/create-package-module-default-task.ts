import { createWorkspaceExecutorDefaultTaskGenerator } from '@komore/schematics';
import { type PackageModuleExecutorOptionsSchema } from './package-module-executor-options-schema';

/**
 * Package module default task generator
 */
export const createPackageModuleDefaultTask =
  createWorkspaceExecutorDefaultTaskGenerator<PackageModuleExecutorOptionsSchema>(projectConfiguration => {});
