import {
  GetCustomVerificationEmailTemplateRequest,
  GetCustomVerificationEmailTemplateResponse
} from '@aws-sdk/client-sesv2';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Retrieves a custom email verification template
 * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetCustomVerificationEmailTemplate.html GetCustomVerificationEmailTemplate}
 */
export const getCustomVerificationEmailTemplate: Command<
  GetCustomVerificationEmailTemplateRequest,
  GetCustomVerificationEmailTemplateResponse
> = throwUnimplementedCommand('GetCustomVerificationEmailTemplate');
