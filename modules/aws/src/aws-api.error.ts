import { createErrorType, errorProperties } from '@komore/error';
import { type HttpMethod, type HttpStatus } from '@komore/http';
import { type UrlString } from '@komore/url';

import { awsDomain } from './aws.domain';

/**
 * AWS API error
 */
export const awsApiError = createErrorType(awsDomain, {
  /**
   * Forbidden operation
   */
  forbiddenOperation: errorProperties<{
    /**
     * Operation
     */
    readonly operation: string;
    /**
     * Permission
     */
    readonly permission: string;
    /**
     * User
     */
    readonly user: string;
  }>(),
  /**
   * Invalid signature
   */
  invalidSignature: errorProperties<{
    /**
     * Operation
     */
    readonly operation: string;
  }>(),
  /**
   * Missing authentication token
   */
  missingAuthenticationToken: errorProperties<{
    /**
     * Operation
     */
    readonly operation: string;
  }>(),
  /**
   * Not allowed
   */
  notAllowed: errorProperties<{
    /**
     * HTTP method
     */
    readonly method: HttpMethod;
    /**
     * Operation
     */
    readonly operation: string;
    /**
     * URL
     */
    readonly url: UrlString;
  }>(),
  /**
   * Not found
   */
  notFound: errorProperties<{
    /**
     * Operation
     */
    readonly operation: string;
    /**
     * URL
     */
    readonly url: UrlString;
  }>(),
  /**
   * The operation failed
   */
  operationFailed: errorProperties<{
    /**
     * Exception name
     */
    readonly exceptionName: string;
    /**
     * Operation
     */
    readonly operation: string;
    /**
     * Service
     */
    readonly service: string;
  }>(),
  /**
   * Serialization failed
   */
  serializationFailed: errorProperties<{
    /**
     * Operation
     */
    readonly operation: string;
  }>(),
  unexpectedResponse: errorProperties<{
    /**
     * Operation
     */
    readonly operation: string;
    /**
     * Text
     */
    readonly text: string;
    /**
     * URL
     */
    readonly url: UrlString;
  }>(),
  /**
   * Unhandled error
   */
  unhandledError: errorProperties<{
    /**
     * Operation
     */
    readonly operation: string;
    /**
     * Status code
     */
    readonly statusCode: HttpStatus;
    /**
     * Text
     */
    readonly text: string;
  }>(),
  /**
   * Unhandled JSON error
   */
  unhandledJsonError: errorProperties<{
    /**
     * JSON error
     */
    readonly json: unknown;
    /**
     * Operation
     */
    readonly operation: string;
  }>(),
  /**
   * Unknown JSON error type format
   */
  unknownJsonErrorTypeFormat: errorProperties<{
    /**
     * Operation
     */
    readonly operation: string;
    /**
     * Type
     */
    readonly type: string;
  }>(),
  /**
   * Unknown operation
   */
  unknownOperation: errorProperties<{
    /**
     * Operation
     */
    readonly operation: string;
  }>(),
  /**
   * Unsupported response type
   */
  unsupportedResponseType: errorProperties<{
    /**
     * Content type
     */
    readonly contentType: string;
    /**
     * Operation
     */
    readonly operation: string;
  }>(),
});
