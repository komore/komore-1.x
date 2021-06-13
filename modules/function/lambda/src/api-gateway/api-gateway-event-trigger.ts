import type { FunctionTrigger } from '@komore/function';
import type { LambdaEvent } from '../lambda-event';
import type { LambdaEventContext } from '../lambda-event-context';
import { isAPIGatewayHTTPApiEvent } from '../lambda-trigger-type';
import type { ApiGatewayFunctionParameters } from './api-gateway-function-parameters';
import type { ApiGatewayResponse } from './api-gateway-response';

/**
 * API gateway trigger
 * @template EventType Event type
 * @template RS Response type
 */
export function apiGatewayEventTrigger<EventType extends LambdaEvent, RS>(): FunctionTrigger<ApiGatewayFunctionParameters, ApiGatewayResponse, LambdaFunctionInputType<>, RS> {
  return {
    buildInputs: buildApiGatewayTriggerInputs
  }
}

function buildInputs(parameters: ApiGatewayFunctionParameters, context: LambdaContext): [supported: boolean, LambdaInputs<RQ>] {
  
    return [true, ];
}

isAPIGatewayHTTPApiEvent