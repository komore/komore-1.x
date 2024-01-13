import { sendGridTemplateCommand } from './command/sendgrid-template.command';

/**
 * SendGrid command
 */
export const sendGridCommand = {
  templates: sendGridTemplateCommand,
} as const;
