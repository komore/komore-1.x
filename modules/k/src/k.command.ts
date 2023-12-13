import { commandProperties, createCommandType } from '@komore/command';
import { type ProjectName, type TaskName } from '@komore/schematics';

import { kDomain } from './k.domain';

/**
 * k command
 */
export const kCommand = createCommandType(kDomain, {
  displayVersion: commandProperties(),
  // TODO: should it really be part of the cli?
  fetchAffectedBase: commandProperties<{ branchName: string; depth: number; includeTags: boolean }>(),
  generateReport: commandProperties<{ outputFormat: 'html' | 'json' | 'markdown' | 'text' }>(),
  list: commandProperties(),
  listExecutors: commandProperties(),
  listGenerators: commandProperties(),
  listPackages: commandProperties(),
  listProjects: commandProperties(),
  runExecutor: commandProperties<
    { taskName: TaskName; parallel: number | undefined } & ({ projectName: ProjectName } | { all: true })
  >(),
  runGenerator: commandProperties<{ schematicName: string }>(),
  // TODO: move to linting/schematics
  validateWorkspace: commandProperties(),
});

console.log(Object.values(kCommand));
