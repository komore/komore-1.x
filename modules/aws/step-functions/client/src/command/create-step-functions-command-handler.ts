import { matchCommand } from '@komore/command';

import { type StepFunctionsCommandHandler } from './step-functions-command-handler';
import { type StepFunctionsCommandHandlerOptions } from './step-functions-command-handler-options';

/**
 * Creates a Step Functions command handler
 *
 * @param handlerOptions Step Functions command handler options
 * @returns Step Functions command handler
 */
export function createStepFunctionsCommandHandler(
  handlerOptions: StepFunctionsCommandHandlerOptions
): StepFunctionsCommandHandler {
  const { apiClient: _api, toEvents: _recorder } = handlerOptions;
  return command => matchCommand(command, {});
}
