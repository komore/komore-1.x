import { getNodeEnvironmentVariables, type NodeEnvironmentVariables } from '@komore/node/environment';

import { type AwsAccessKeyCredentials } from './aws-access-key-credentials';

/**
 * Returns the default AWS credentials
 *
 * @param environmentVariables Environment variables
 * @returns Default AWS region
 */
export function getDefaultAwsCredentials(environmentVariables: NodeEnvironmentVariables): AwsAccessKeyCredentials {
  return getNodeEnvironmentVariables(environmentVariables, {
    accessKeyId: {
      description: 'AWS access key identifier',
      name: 'AWS_ACCESS_KEY_ID',
    },
    secretAccessKey: {
      description: 'AWS secret access key',
      name: 'AWS_SECRET_ACCESS_KEY',
    },
  });
}
