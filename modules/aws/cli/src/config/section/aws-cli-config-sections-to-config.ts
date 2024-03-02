import { awsCliError } from '../../aws-cli.error';
import { type AwsCliConfig } from '../aws-cli-config';
import { type AwsCliConfigSection } from './aws-cli-config-section';
import { awsCliConfigSectionToProfile } from './aws-cli-config-section-to-profile';
import { awsCliConfigSectionToSsoSession } from './aws-cli-config-section-to-sso-session';

/**
 * Adds an AWS CLI configuration section to an AWS CLI configuration
 *
 * @param config AWS CLI configuration
 * @param section AWS CLI configuration section
 * @returns AWS CLI configuration with the added section
 */
export function awsCliConfigSectionsToConfig(config: AwsCliConfig, section: AwsCliConfigSection): AwsCliConfig {
  const { type } = section;

  switch (type) {
    case 'profile':
      return {
        ...config,
        profiles: [...config.profiles, awsCliConfigSectionToProfile(section)],
      };
    case 'sso-session':
      return {
        ...config,
        ssoSessions: [...config.ssoSessions, awsCliConfigSectionToSsoSession(section)],
      };
    default:
      throw awsCliError.unknownConfigSectionType({ type });
  }
}
