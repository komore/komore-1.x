import { createErrorGroup } from '@komore/error';

import { schematicsDomain } from '../domain/schematics-domain';

/**
 * Task errors
 */
export const taskErrors = createErrorGroup(schematicsDomain, 'task');

