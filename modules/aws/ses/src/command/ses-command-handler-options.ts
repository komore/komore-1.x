import { type SESv2Client } from '@aws-sdk/client-sesv2';

import { type sesEvent } from '../ses.event';

/**
 * SES command handler options
 */
export interface SesCommandHandlerOptions extends AwsCommandHandlerOptions<SESv2Client, typeof sesEvent> {}
