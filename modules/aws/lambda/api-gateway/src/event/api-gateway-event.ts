import { type HttpMethod } from '@komore/http';
import { type ReadonlyRecord } from '@komore/typescript';

import { type ApiGatewayEventRequestContext } from './api-gateway-event-request-context';

/**
 * API gateway event
 */
export interface ApiGatewayEvent {
  /**
   * Request body
   */
  readonly body: string | null; // TODO: check if null or undefined on GET/DELETE
  /**
   * HTTP headers
   */
  readonly headers: ReadonlyRecord<string, string>;
  /**
   * HTTP method
   */
  readonly httpMethod: HttpMethod;
  /**
   * Whether the body is base64 encoded
   */
  readonly isBase64Encoded: boolean;
  /**
   * Multi-value HTTP headers
   */
  readonly multiValueHeaders: ReadonlyRecord<string, ReadonlyArray<string>>;
  /**
   * Multi-value query string parameters
   */
  readonly multiValueQueryStringParameters: ReadonlyRecord<string, ReadonlyArray<string>>;
  /**
   * Resource path
   */
  readonly path: string;
  /**
   * Resource path parameters
   */
  readonly pathParameters: ReadonlyRecord<string, string>;
  /**
   * Query string parameters
   */
  readonly queryStringParameters: ReadonlyRecord<string, string>;
  /**
   * Resource
   */
  readonly resource: string;
  /**
   * Request context
   */
  readonly requestContext: ApiGatewayEventRequestContext;
  /**
   * Stage variables
   */
  readonly stageVariables: ReadonlyRecord<string, string>;
}
