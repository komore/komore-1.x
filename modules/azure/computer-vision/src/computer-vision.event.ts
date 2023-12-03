import { createEventType } from '@komore/event';

import { computerVisionDomain } from './computer-vision.domain';

/**
 * Computer Vision event
 */
export const computerVisionEvent = createEventType(computerVisionDomain, {});
