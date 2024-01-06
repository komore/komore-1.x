import { createEventType } from '@komore/event';

import { apiGatewayDomain } from './api-gateway.domain';

/**
 * API Gateway event
 */
export const apiGatewayEvent = createEventType(apiGatewayDomain, {});
