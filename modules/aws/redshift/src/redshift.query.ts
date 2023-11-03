import { type GetClusterCredentialsCommand } from '@aws-sdk/client-redshift';

import { awsQueryProperties, createAwsQueryType } from '@komore/aws';

import { redshiftDomain } from './redshift.domain';

/**
 * Redshift query
 */
export const redshiftQuery = createAwsQueryType(redshiftDomain, {
  /**
   * Returns a database user name and temporary password with a temporary authorization to log on to a Redshift database
   *
   * @see {@link https://docs.aws.amazon.com/redshift/latest/APIReference/API_GetClusterCredentials.html GetClusterCredentials}
   */
  getClusterCredentials: awsQueryProperties<GetClusterCredentialsCommand>(),
});
