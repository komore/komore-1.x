import { type ReadonlyRecord } from '@komore/typescript';

/**
 * API Gateway HTTP API event
 */
export interface ApiGatewayHttpApiEvent {
  readonly version: '2.0';
  readonly routeKey: string;
  readonly rawPath: string;
  readonly rawQueryString: string;
  readonly cookies?: string[];
  readonly headers: ReadonlyRecord<string, string>;
  readonly queryStringParameters?: ReadonlyRecord<string, string>;
  readonly requestContext: {};
  readonly body?: string;
  readonly pathParameters?: ReadonlyRecord<string, string>;
  readonly isBase64Encoded: boolean;
  readonly stageVariables?: ReadonlyRecord<string, string>;
}
