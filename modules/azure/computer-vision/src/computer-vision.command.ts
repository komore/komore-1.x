import { createCommandType } from '@komore/command';

import { computerVisionDomain } from './computer-vision.domain';

/**
 * Computer Vision command
 */
export const computerVisionCommand = createCommandType(computerVisionDomain, {});
