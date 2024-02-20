import { sendGridTemplateCommand } from './sendgrid-template.command';

/**
 * SendGrid command
 */
export const sendGridCommand = {
  templates: sendGridTemplateCommand,
} as const;
