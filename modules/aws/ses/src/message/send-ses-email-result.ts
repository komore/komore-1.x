import { type SesMessageId } from './id/ses-message-id';

/**
 * Send SES email result
 *
 * @see {@link https://docs.aws.amazon.com/ses/latest/APIReference/API_SendEmail.html#API_SendEmail_ResponseElements SendEmail Response Elements}
 */
export interface SendSesEmailResult {
  /**
   * Message identifier
   */
  readonly MessageId: SesMessageId;
}
