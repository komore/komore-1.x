import { type HttpClient } from '@komore/http/client';

import { type EToroAccountType } from '../account/etoro-account-type';

/**
 * eToro LightStreamer session options
 */
export interface EToroLightStreamerSessionOptions {
  /**
   * Account type
   */
  readonly accountType: EToroAccountType;
  /**
   * Application information
   */
  readonly application: {
    /**
     * Identifier
     */
    readonly identifier: string;
    /**
     * Name
     */
    readonly name: string;
    /**
     * Version
     */
    readonly version: string;
  };
  /**
   * Endpoint URL
   */
  readonly endpointUrl: URL;
  /**
   * HTTP client
   */
  readonly httpClient: HttpClient;
  /**
   * Token
   */
  readonly token: string;
}
