import { createEventType } from '@komore/event';

import { cognitoDomain } from './cognito.domain';

/**
 * Cognito event
 */
export const cognitoEvent = createEventType(cognitoDomain, {});
