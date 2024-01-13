import { createCommandType } from '@komore/command';

import { gitHubDomain } from '../github.domain';

/**
 * GitHub release command
 */
export const gitHubReleaseCommand = createCommandType(gitHubDomain, {});
