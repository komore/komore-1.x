import { createErrorType } from '@komore/error';

import { rekognitionDomain } from './rekognition.domain';

/**
 * Rekognition error
 */
export const rekognitionError = createErrorType(rekognitionDomain, {});
