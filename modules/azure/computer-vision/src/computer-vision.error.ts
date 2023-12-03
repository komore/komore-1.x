import { createErrorType } from '@komore/error';

import { computerVisionDomain } from './computer-vision.domain';

/**
 * Computer Vision error
 */
export const computerVisionError = createErrorType(computerVisionDomain, {});
