import {
  DeleteEmailTemplateCommand,
  type DeleteEmailTemplateCommandInput,
  type SESv2Client
} from '@aws-sdk/client-sesv2';
import { sendCommand } from '@komore/integration-amazon';

/**
 * Deletea an email template
 * @param sesClient SES client
 * @param commandInput `DeleteEmailTemplate` command input
 * @returns Command output
 * @note {@link https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteEmailTemplate.html DeleteEmailTemplate}
 */
export const deleteEmailTemplate = (sesClient: SESv2Client, commandInput: DeleteEmailTemplateCommandInput) =>
  sendCommand(sesClient, new DeleteEmailTemplateCommand(commandInput));
