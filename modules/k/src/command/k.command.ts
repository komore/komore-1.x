import { commandProperties, createCommandType } from '@komore/command';

import { kDomain } from '../k.domain';

/**
 * k command
 */
export const kCommand = createCommandType(kDomain, {
  displayVersion: commandProperties(),
  fetchAffectedBase: commandProperties<{ branchName: string; depth: number; includeTags: boolean }>(),
  generate: commandProperties<{}>(),
  generateReport: commandProperties<{ outputFormat: 'html' | 'json' | 'markdown' | 'text' }>(),
  list: commandProperties(),
  listExecutors: commandProperties(),
  listGenerators: commandProperties(),
  listPackages: commandProperties(),
  validateWorkspace: commandProperties(),
});

/**
 * k command type
 */
export type KCommandType = typeof kCommand;
