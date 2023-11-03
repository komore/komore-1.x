import { type RebootClusterCommandInput } from '@aws-sdk/client-redshift';

import { createAwsCommandType } from '@komore/aws';
import { commandProperties } from '@komore/command';

import { redshiftDomain } from './redshift.domain';

/**
 * Redshift command
 */
export const redshiftCommand = createAwsCommandType(redshiftDomain, {
  /**
   * Reboots a cluster
   *
   * @see {@link https://docs.aws.amazon.com/redshift/latest/APIReference/API_RebootCluster.html RebootCluster}
   */
  rebootCluster: commandProperties<RebootClusterCommandInput>(),
});
