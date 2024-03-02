import { type IncomingMessage } from 'node:http';

/**
 * Cloud Functions HTTP internal request
 */
export interface CloudFunctionsHttpInternalRequest extends IncomingMessage {
  /**
   * Raw HTTP body
   */
  readonly rawBody?: Buffer;
}
