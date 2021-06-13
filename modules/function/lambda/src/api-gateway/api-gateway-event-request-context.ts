import type { ApiGatewayEventIdentity } from './api-gateway-event-identity';

/**
 * API Gateway event request context
 */
export interface ApiGatewayEventRequestContext {
  readonly accountId: string;
  readonly apiId: string;
  readonly connectedAt?: number;
  readonly connectionId?: string;
  readonly domainName?: string;
  readonly domainPrefix?: string;
  readonly eventType?: string;
  readonly extendedRequestId?: string;
  readonly httpMethod: string;
  readonly identity: ApiGatewayEventIdentity;
  readonly messageDirection?: string;
  readonly messageId?: string | null;
  readonly path: string;
  readonly protocol: string;
  readonly stage: string;
  readonly requestId: string;
  readonly requestTime?: string;
  readonly requestTimeEpoch: number;
  readonly resourceId: string;
  readonly resourcePath: string;
  readonly routeKey?: string;
}
