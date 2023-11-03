import { type AwsClient } from '@komore/aws';

import { type translateCommand } from '../translate.command';
import { type translateError } from '../translate.error';
import { type translateEvent } from '../translate.event';
import { type translateQuery } from '../translate.query';
import { type translateCommandEventMapping } from './translate-command-event-mapping';

/**
 * Translate client
 */
export interface TranslateClient
  extends AwsClient<
    typeof translateCommand,
    typeof translateCommandEventMapping,
    typeof translateEvent,
    typeof translateQuery,
    typeof translateError
  > {}
