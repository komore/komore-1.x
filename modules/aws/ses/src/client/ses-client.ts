import { type AwsClient } from '@komore/aws';

import { type sesCommand } from '../command/ses.command';
import { type sesCommandEventMapping } from '../event/ses-command-event-mapping';
import { type sesEvent } from '../event/ses.event';
import { type sesQuery } from '../query/ses.query';
import { type sesError } from '../ses.error';

/**
 * SES client
 */
export interface SesClient
  extends AwsClient<
    typeof sesCommand,
    typeof sesCommandEventMapping,
    typeof sesEvent,
    typeof sesQuery,
    typeof sesError
  > {}
