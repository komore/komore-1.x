import { type IPString } from '@komore/network';

/**
 * S3 event record request parameters
 */
export interface S3EventRecordRequestParameters {
  /**
   * Source IP address
   */
  readonly sourceIPAddress: IPString;
}
