import { type HttpApiDefaults } from './http-api-defaults';
import { type HttpApiDescription } from './http-api-description';
import { type HttpApiLicense } from './http-api-license';
import { type HttpApiMetadata } from './http-api-metadata';
import { type HttpApiServer } from './http-api-server';

/**
 * HTTP API
 */
export interface HttpApi {
  /**
   * Defaults
   */
  readonly defaults?: HttpApiDefaults;
  /**
   * Description
   */
  readonly description: HttpApiDescription;
  /**
   * License
   */
  readonly license: HttpApiLicense;
  /**
   * Metadata
   */
  readonly metadata: HttpApiMetadata;
  /**
   * Servers
   */
  readonly servers: ReadonlyArray<HttpApiServer>;
  /**
   * HTTP API schema version
   */
  readonly version: '1.0.0';
}
