import { createLambdaTrigger, type LambdaTrigger } from '@komore/aws/lambda';

import { type ApiGatewayEventTriggerOptions } from './api-gateway-event-trigger-options';
import { type ApiGatewayEvent } from './event/api-gateway-event';
import { type ApiGatewayEventResponse } from './event/response/api-gateway-event-response';

/**
 * API gateway event trigger
 *
 * @template EventType Event type
 * @template RS Response type
 */
export function apiGatewayEvent(
  _triggerOptions?: ApiGatewayEventTriggerOptions
): LambdaTrigger<ApiGatewayEvent, ApiGatewayEventResponse> {
  return createLambdaTrigger({});
}
