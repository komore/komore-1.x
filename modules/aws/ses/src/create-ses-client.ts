import { SESv2Client, type SESv2ClientConfig } from '@aws-sdk/client-sesv2';

/**
 * Creates an SES client
 * @param configuration Configuration
 * @returns SES client
 */
export function createSESClient(configuration?: SESv2ClientConfig): SESv2Client {
  return new SESv2Client(configuration ?? {});
}
