import { nodeEnvironmentVariablesToValue, type NodeEnvironmentVariables } from '@komore/node/environment';

import { type AwsCredentials } from './aws-credentials';

/**
 * Cretes a function that returns AWS credentials, given Node environment variables
 *
 * @returns Function that returns AWS credentials, given Node environment variables
 */
export function nodeEnvironmentVariablesToAwsCredentials(): (
  environmentVariables: NodeEnvironmentVariables
) => AwsCredentials {
  return nodeEnvironmentVariablesToValue({
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
