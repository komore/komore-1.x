import { BaseLocalServiceConfiguration } from './base-local-service-configuration';

/**
 * Local service configuration processor
 * @template LocalServiceConfigurationType Local service configuration type
 */
export type LocalServiceConfigurationProcessor<LocalServiceConfigurationType> = (
  baseLocalServiceConfiguration: BaseLocalServiceConfiguration,
  localServiceConfiguration: Partial<LocalServiceConfigurationType>
) => LocalServiceConfigurationType;
