import { type CommandFromType, type CommandHandler } from '@komore/command';

import { type route53Command } from '../route-53.command';

/**
 * Route 53 command handler
 */
export type Route53CommandHandler = CommandHandler<CommandFromType<typeof route53Command>>;
