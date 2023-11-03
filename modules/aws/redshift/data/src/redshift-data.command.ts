import { type ExecuteStatementCommandInput } from '@aws-sdk/client-redshift-data';

import { createAwsCommandType } from '@komore/aws';

import { redshiftDataDomain } from './redshift-data.domain';
import { commandProperties } from '@komore/command';

/**
 * Redshift Data command
 */
export const redshiftDataCommand = createAwsCommandType(redshiftDataDomain, {
  /**
   *
   */
  executeStatement: commandProperties<ExecuteStatementCommandInput>(),
});
