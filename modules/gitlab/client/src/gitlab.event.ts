import { createEventType } from '@komore/event';
import { gitLabDomain } from '@komore/gitlab';

/**
 * GitLab event
 */
export const gitLabEvent = createEventType(gitLabDomain, {});
