import { getNodeEnvironmentVariables, type NodeEnvironmentVariables } from '@komore/node/environment';

import { asAwsRegion } from './as-aws-region';
import { type AwsRegion } from './aws-region';

/**
 * Returns the default AWS region
 *
 * @param environmentVariables Environment variables
 * @returns Default AWS region
 */
export function getDefaultAwsRegion(environmentVariables: NodeEnvironmentVariables): AwsRegion {
  const { region } = getNodeEnvironmentVariables(environmentVariables, {
    region: {
      description: 'AWS region',
      name: 'AWS_REGION',
      parse: asAwsRegion,
    },
  });
  return region;
}
