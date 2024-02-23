import { apiGatewayDomain } from '@komore/aws/api-gateway';
import { createEventType } from '@komore/event';

/**
 * API Gateway event
 */
export const apiGatewayEvent = createEventType(apiGatewayDomain, {});
