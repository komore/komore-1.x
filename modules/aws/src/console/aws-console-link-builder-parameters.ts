/**
 * AWS console link builder parameters
 */
export interface AwsConsoleLinkBuilderParameters {
  /**
   * Destination URL
   */
  readonly destinationUrl: URL;
  /**
   * Role name / permission set
   */
  readonly roleName: string;
}
