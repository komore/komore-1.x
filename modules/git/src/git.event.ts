import { createEventType } from '@komore/event';

import { gitDomain } from './git.domain';

/**
 * Git event
 */
export const gitEvent = createEventType(gitDomain, {});
