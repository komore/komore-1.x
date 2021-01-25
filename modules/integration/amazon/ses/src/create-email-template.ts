import type { CreateEmailTemplateCommandInput, SESv2Client } from '@aws-sdk/client-sesv2';
import { CreateEmailTemplateCommand } from '@aws-sdk/client-sesv2';
import { sendCommand } from '@komore/integration-amazon';

/**
 * Creates an email template
 * @param sesClient SES client
 * @param commandInput `CreateEmailTemplate` command input
 * @returns Command output
 * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_CreateEmailTemplate.html CreateEmailTemplate}
 */
export const createEmailTemplate = (sesClient: SESv2Client, commandInput: CreateEmailTemplateCommandInput) =>
  sendCommand(sesClient, new CreateEmailTemplateCommand(commandInput));
