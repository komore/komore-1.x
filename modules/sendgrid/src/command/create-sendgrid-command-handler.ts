import { CommandFromType, CommandHandler, matchCommand } from "@komore/command";

import { sendGridCommand } from "../sendgrid.command";

export function createSendGridCommandHandler(options: SendGridCommandHandlerOptions): CommandHandler<CommandFromType<typeof sendGridCommand>> {
  const { client, events } = options;
  return command => matchCommand(command, {
    createTransactionalTemplateVersion:
  })
}
