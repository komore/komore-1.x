import { type CommandFromType, type CommandHandler } from '@komore/command';

import { type terraformCommand } from '../terraform.command';

/**
 * Terraform command handler
 */
export type TerraformCommandHandler = CommandHandler<CommandFromType<typeof terraformCommand>>;
