import { asAwsRegion } from '@komore/aws';

import { type AwsCliSsoSession } from '../../session/aws-cli-sso-session';
import { type AwsCliConfigSection } from './aws-cli-config-section';

/**
 * Returns an AWS CLI SSO session, given a section
 *
 * @param section AWS CLI configuration section
 * @returns AWS CLI SSO session
 */
export function awsCliConfigSectionToSsoSession(section: AwsCliConfigSection): AwsCliSsoSession {
  const { name, properties } = section;

  const region = asAwsRegion(properties['sso_region'] ?? '');
  const registrationScopes = properties['sso_registration_scopes']?.split(',') ?? [];
  const startUrl = new URL(properties['sso_start_url'] ?? '');

  return {
    name,
    region,
    registrationScopes: registrationScopes as ReadonlyArray<`sso:account:access`>,
    startUrl,
  };
}
