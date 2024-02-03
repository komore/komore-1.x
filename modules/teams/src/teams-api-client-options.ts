import { type MsGraphApiClient } from '@komore/msgraph';

/**
 * Teams API client options
 */
export interface TeamsApiClientOptions {
  /**
   * Microsoft Graph API client
   */
  readonly msGraphApiClient: MsGraphApiClient;
}
