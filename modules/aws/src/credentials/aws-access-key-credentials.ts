/**
 * AWS access key credentials
 */
export interface AwsAccessKeyCredentials {
  /**
   * Access key identifier
   */
  readonly accessKeyId: string;
  /**
   * Secret access key
   */
  readonly secretAccessKey: string;
}
