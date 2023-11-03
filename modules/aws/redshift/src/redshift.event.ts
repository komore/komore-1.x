import { type RebootClusterCommandOutput } from '@aws-sdk/client-redshift';

import { createAwsEventType } from '@komore/aws';
import { eventProperties } from '@komore/event';

import { redshiftDomain } from './redshift.domain';

/**
 * Redshift event
 */
export const redshiftEvent = createAwsEventType(redshiftDomain, {
  /**
   * A cluster reboot has been requested
   *
   * @see {@link https://docs.aws.amazon.com/redshift/latest/APIReference/API_RebootCluster.html RebootCluster}
   */
  clusterRebootRequested: eventProperties<RebootClusterCommandOutput>(),
});
