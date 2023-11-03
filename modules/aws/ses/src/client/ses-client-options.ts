import { type SESv2ClientConfig } from '@aws-sdk/client-sesv2';

import { type AwsClientOptions } from '@komore/aws';

/**
 * SES client options
 */
export interface SesClientOptions extends AwsClientOptions<SESv2ClientConfig> {}
