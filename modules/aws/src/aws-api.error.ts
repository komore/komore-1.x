import { createErrorType, errorProperties } from '@komore/error';
import { type HttpStatus } from '@komore/http';
import { type UrlString } from '@komore/url';

import { awsDomain } from './aws.domain';

/**
 * AWS API error
 */
export const awsApiError = createErrorType(awsDomain, {
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
    readonly operation: string;
  }>(),
});
