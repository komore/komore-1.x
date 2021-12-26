import { type ReadonlyRecord } from '@komore/typescript';
import { type ApiGatewayEventRequestContext } from './api-gateway-event-request-context';

/**
 * API gateway event
 */
export interface ApiGatewayEvent {
  // TODO: check if null or undefined on GET/DELETE
  readonly body: string | null;
  readonly headers: ReadonlyRecord<string, string>;
  readonly httpMethod: string;
  readonly isBase64Encoded: boolean;
  readonly multiValueHeaders: ReadonlyRecord<string, ReadonlyArray<string>>;
  readonly multiValueQueryStringParameters: ReadonlyRecord<string, ReadonlyArray<string>>;
  readonly path: string;
  readonly pathParameters: ReadonlyRecord<string, string>;
  readonly queryStringParameters: ReadonlyRecord<string, string>;
  readonly resource: string;
  readonly requestContext: ApiGatewayEventRequestContext;
  readonly stageVariables: ReadonlyRecord<string, string>;
}
