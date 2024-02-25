import { asObservable, defer } from '@komore/reactive';

import { type WorkspaceGenerator } from '../workspace-generator';
import { type WorkspaceGeneratorFactory } from './workspace-generator-factory';
import { type WorkspaceGeneratorFactoryOptions } from './workspace-generator-factory-options';

/**
 * Creates a workspace generator factory
 *
 * @param factory Factory function
 * @returns Workspace generator factory
 * @template OptionsType Options type
 */
export function createWorkspaceGeneratorFactory<OptionsType = unknown>(
  factory: (
    options: WorkspaceGeneratorFactoryOptions
  ) => WorkspaceGenerator<OptionsType> | Observable<WorkspaceGenerator<OptionsType>>
): WorkspaceGeneratorFactory<OptionsType> {
  return options =>
    defer(() => {
      const workspaceGenerator = factory(options);
      return asObservable(workspaceGenerator);
    });
}
