import { type HttpStatus } from '@komore/http';
import { type ReadonlyRecord } from '@komore/typescript';

/**
 * API gateway event response
 */
export interface ApiGatewayEventResponse {
  /**
   * Response body
   */
  readonly body?: string;
  /**
   * HTTP headers
   */
  readonly headers?: ReadonlyRecord<string, boolean | number | string>;
  /**
   * Whether the result is base64 encoded
   */
  readonly isBase64Encoded?: boolean;
  /**
   * Multi-value HTTP headers
   */
  readonly multiValueHeaders?: ReadonlyRecord<string, ReadonlyArray<boolean | number | string>>;
  /**
   * HTTP status code
   */
  readonly statusCode: HttpStatus;
}
