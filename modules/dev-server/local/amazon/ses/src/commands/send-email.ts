import { SendEmailRequest, SendEmailResponse } from '@aws-sdk/client-sesv2';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Sends an email
 * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendEmail.html SendEmail}
 */
export const sendEmail: Command<SendEmailRequest, SendEmailResponse> = throwUnimplementedCommand('SendEmail');
