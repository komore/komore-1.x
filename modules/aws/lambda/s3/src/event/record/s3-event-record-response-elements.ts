/**
 * S3 event record response elements
 */
export interface S3EventRecordResponseElements {
  /**
   * Host that processed the request
   */
  'x-amz-id-2': string;
  /**
   * Generated request identifier
   */
  'x-amz-request-id': string;
}
