import { type Logger } from '@komore/logging';

/**
 * AWS client options
 */
export interface AwsClientOptions<ConfigurationType> {
  /**
   * Configuration
   */
  readonly configuration?: ConfigurationType;
  /**
   * Logger
   */
  readonly logger: Logger;
}
