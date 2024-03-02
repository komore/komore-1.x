import { type HttpStatus } from '@komore/http';

/**
 * Cloud Functions HTTP response
 *
 * @template BodyType Body type
 */
export interface CloudFunctionsHttpResponse<BodyType = undefined> {
  /**
   * Body
   */
  readonly body: BodyType;
  /**
   * Status code
   */
  readonly statusCode: HttpStatus;
  /**
   * Status message
   */
  readonly statusMessage: string;
}
