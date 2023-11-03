import { type ExecuteStatementCommandOutput } from '@aws-sdk/client-redshift-data';

import { createAwsEventType } from '@komore/aws';
import { eventProperties } from '@komore/event';

import { redshiftDataDomain } from './redshift-data.domain';

/**
 * Redshift Data event
 */
export const redshiftDataEvent = createAwsEventType(redshiftDataDomain, {
  /**
   *
   */
  statementExecuted: eventProperties<ExecuteStatementCommandOutput>(),
});
