import { asAwsAccountId, asAwsRegion } from '@komore/aws';

import { type AwsCliProfile } from '../../profile/aws-cli-profile';
import { type AwsCliConfigSection } from './aws-cli-config-section';

/**
 * Returns an AWS CLI SSO session, given a section
 *
 * @param section AWS CLI configuration section
 * @returns AWS CLI SSO session
 */
export function awsCliConfigSectionToProfile(section: AwsCliConfigSection): AwsCliProfile {
  const { name, properties } = section;

  const region = asAwsRegion(properties['region'] ?? '');

  const accountIdString = properties['sso_account_id'];
  const accountId = accountIdString !== undefined ? asAwsAccountId(accountIdString) : undefined;
  const roleName = properties['sso_role_name'];
  const sessionName = properties['sso_session'];
  const sso = accountId && roleName && sessionName ? { accountId, roleName, sessionName } : undefined;

  const accessKeyId = properties['aws_access_key_id'];
  const secretAccessKey = properties['aws_secret_access_key'];
  const token = accessKeyId && secretAccessKey ? { accessKeyId, secretAccessKey } : undefined;

  return {
    name,
    region,
    ...(sso ? { sso } : {}),
    ...(token ? { token } : {}),
  };
}
