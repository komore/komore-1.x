import { type SesApiClient } from '../ses-api-client';
import { type SendSesEmailParameters } from './send-ses-email-parameters';
import { type SendSesEmailResult } from './send-ses-email-result';

/**
 * Creates a function that sends an SES email
 *
 * @param apiClient SES API client
 * @returns Function that sends an SES email
 * @see {@link https://docs.aws.amazon.com/ses/latest/APIReference/API_SendEmail.html SendEmail}
 */
export function sendSesEmail(
  apiClient: SesApiClient
): (parameters: SendSesEmailParameters) => Observable<SendSesEmailResult> {
  return parameters =>
    apiClient({
      operation: 'ses.SendEmail',
      parameters,
    });
}
