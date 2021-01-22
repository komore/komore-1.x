import type { SESv2ClientConfig } from '@aws-sdk/client-sesv2';
import { SESv2Client } from '@aws-sdk/client-sesv2';

/**
 * Creates an SES client
 * @param configuration Configuration
 * @returns SES client
 */
export function createSESClient(configuration?: SESv2ClientConfig): SESv2Client {
  return new SESv2Client(configuration ?? {});
}
