import type { ApiGatewayHttpApiEventAuthorizer } from './api-gateway-http-api-event-authorizer';
import type { ApiGatewayHttpApiEventRequest } from './api-gateway-http-api-event-request';

/**
 * API Gateway HTTP API event request context
 */
export interface ApiGatewayHttpApiEventRequestContext {
  readonly accountId: string;
  readonly apiId: string;
  readonly authorizer?: ApiGatewayHttpApiEventAuthorizer;
  readonly domainName: string;
  readonly domainPrefix: string;
  readonly http: ApiGatewayHttpApiEventRequest;
  readonly requestId: string;
  readonly routeKey: string;
  readonly stage: string;
  readonly time: string;
  readonly timeEpoch: number;
}
