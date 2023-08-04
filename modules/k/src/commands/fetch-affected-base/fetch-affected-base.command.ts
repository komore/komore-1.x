import { defineCommand } from '@komore/command';
import { tapNext } from '@komore/reactive';

/**
 * Fetch affected base command
 */
export const fetchAffectedBaseCommand = defineCommand(
  'fetch-affected-base',
  'Fetches the affected base',
  ($, { logger }) =>
    $.pipe(
      tapNext(({ branchName, depth, includeTags }) =>
        logger.log(`git fetch --no-tags(${includeTags}) --depth=${depth} origin ${branchName}`)
      )
    ),
  {
    branchName: {
      defaultValue: 'main',
      description: 'Branch name',
      parse: String,
    },
    depth: {
      defaultValue: 1,
      description: 'Fetch depth',
      parse: Number,
    },
    includeTags: {
      defaultValue: false,
      description: 'Whether git tags should be included',
      parse: Boolean,
    },
  }
);
