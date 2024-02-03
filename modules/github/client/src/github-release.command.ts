import { createCommandType } from '@komore/command';
import { gitHubDomain } from '@komore/github';

/**
 * GitHub release command
 */
export const gitHubReleaseCommand = createCommandType(gitHubDomain, {});
