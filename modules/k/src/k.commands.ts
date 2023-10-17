import { commandProperties, createCommandGroup } from '@komore/command';

import { kDomain } from './k.domain';

/**
 * k command group
 */
export const kCommandGroup = createCommandGroup(kDomain, {
  fetchAffectedBase: commandProperties<{ branchName: string; depth: number; includeTags: boolean }>(),
  info: commandProperties<{}>(),
  list: commandProperties<{}>(),
  listExecutors: commandProperties<{}>(),
  listGenerators: commandProperties<{}>(),
  report: commandProperties<{ outputFormat: 'html' | 'json' | 'markdown' | 'text' }>(),
  test: commandProperties<{}>(),
  version: commandProperties<{}>(),
});
