import { type ApiGatewayResult } from './result/api-gateway-result';

export function toApiGatewayResult(statusCode: number): ApiGatewayResult {
  return {
    statusCode
  };
}
