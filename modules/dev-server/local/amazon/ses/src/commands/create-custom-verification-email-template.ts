import {
  CreateCustomVerificationEmailTemplateRequest,
  CreateCustomVerificationEmailTemplateResponse
} from '@aws-sdk/client-sesv2';
import { Command, throwUnimplementedCommand } from '@komore/dev-server-local-amazon/service';

/**
 * Creates a new custom verification email template
 * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateCustomVerificationEmailTemplate.html CreateCustomVerificationEmailTemplate}
 */
export const createCustomVerificationEmailTemplate: Command<
  CreateCustomVerificationEmailTemplateRequest,
  CreateCustomVerificationEmailTemplateResponse
> = throwUnimplementedCommand('CreateCustomVerificationEmailTemplate');
