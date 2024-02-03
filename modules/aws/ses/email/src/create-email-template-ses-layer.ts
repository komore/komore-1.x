import { type CreateEmailTemplateCommandInput, type SESv2Client } from "@aws-sdk/client-sesv2";

import { createSesEmailTemplate } from "@komore/aws/ses";
import { type EmailTemplate } from "@komore/email";
import { map } from '@komore/reactive';

/**
 * createEmailTemplate SES layer
 * @param sesClient SES client
 */
export function createEmailTemplateSESLayer(sesClient: SESv2Client) {
  return (emailTemplate: Omit<EmailTemplate, 'id'>): Observable<EmailTemplate> => {
    const commandInput = buildCommandInput(emailTemplate);
    return createSesEmailTemplate(sesClient, commandInput).pipe(
      map(() => ({
        ...emailTemplate,
        id: emailTemplate.name
      }))
    );
  };
}

/**
 * Builds a `CreateEmailTemplate` command input from an email template
 * @param emailTemplate Email template
 * @returns `CreateEmailTemplate` command input
 */
function buildCommandInput(emailTemplate: Omit<EmailTemplate, 'id'>): CreateEmailTemplateCommandInput {
  return {
    TemplateName: emailTemplate.name,
    TemplateContent: {
      Subject?: ,
      Text?: ,
      Html?:
    }
  };
}
