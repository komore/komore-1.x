import { type EToroAccountType } from '../account/etoro-account-type';

/**
 * eToro LightStreamer session password
 */
export interface EToroLightStreamerSessionPassword {
  /**
   * Account type
   */
  readonly AccountType: EToroAccountType;
  /**
   * Application identifier
   */
  readonly ApplicationIdentifier: string;
  /**
   * Application name
   */
  readonly ApplicationName: string;
  /**
   * Application version
   */
  readonly ApplicationVersion: string;
  /**
   * User agent
   */
  readonly UserAgent: string;
}
