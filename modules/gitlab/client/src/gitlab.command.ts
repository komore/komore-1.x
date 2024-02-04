import { createCommandType } from '@komore/command';
import { gitLabDomain } from '@komore/gitlab';

/**
 * GitLab command
 */
export const gitLabCommand = createCommandType(gitLabDomain, {});
