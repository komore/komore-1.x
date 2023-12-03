import { type FunctionTrigger } from '@komore/function';
import { type LambdaEvent } from '../lambda-event';
import { type LambdaEventContext } from '@komore/function-lambda';
import { isApiGatewayEvent } from './is-api-gateway-event';
import { type ApiGatewayFunctionParameters } from './api-gateway-function-parameters';
import { type ApiGatewayResult } from '../result/api-gateway-result';

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
