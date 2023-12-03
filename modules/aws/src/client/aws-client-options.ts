/**
 * AWS client options
 */
export interface AwsClientOptions<ConfigurationType> {
  /**
   * Configuration
   */
  readonly configuration?: ConfigurationType;
}
