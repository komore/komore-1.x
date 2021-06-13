/**
 * API Gateway HTTP API event request
 */
export interface ApiGatewayHttpApiEventRequest {
  readonly method: string;
  readonly path: string;
  readonly protocol: string;
  readonly sourceIp: string;
  readonly userAgent: string;
}
