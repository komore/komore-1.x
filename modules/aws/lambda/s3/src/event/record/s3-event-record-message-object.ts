import { type UrlEncodedString } from '@komore/url';

/**
 * S3 event record message object
 */
export interface S3EventRecordMessageObject {
  /**
   * eTag
   */
  readonly eTag: string;
  /**
   * Object key
   */
  readonly key: UrlEncodedString;
  /**
   * String representation of the hexadecimal value used to determine the event sequence
   *
   * @note: Only used with `PUT` and `DELETE` requests
   */
  readonly sequencer: string;
  /**
   * Object size
   */
  readonly size: number;
  /**
   * Object version
   *
   * @note If the bucket is not versioned, the object version is `null`
   */
  readonly versionId: string | null;
}
