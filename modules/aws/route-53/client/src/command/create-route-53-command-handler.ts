import { matchCommand } from '@komore/command';

import { type Route53CommandHandler } from './route-53-command-handler';
import { type Route53CommandHandlerOptions } from './route-53-command-handler-options';

/**
 * Creates a Route 53 command handler
 *
 * @param handlerOptions Route 53 command handler options
 * @returns Route 53 command handler
 */
export function createRoute53CommandHandler(handlerOptions: Route53CommandHandlerOptions): Route53CommandHandler {
  const { apiClient, toEvents } = handlerOptions;
  return command => matchCommand(command, {});
}
