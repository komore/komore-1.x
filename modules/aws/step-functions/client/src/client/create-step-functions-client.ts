import { createClient } from '@komore/client';

import { createStepFunctionsCommandHandler } from '../command/create-step-functions-command-handler';
import { stepFunctionsCommand } from '../step-functions.command';
import { stepFunctionsEvent } from '../step-functions.event';
import { stepFunctionsError } from '../step-functions.error';
import { stepFunctionsQuery } from '../step-functions.query';
import { createStepFunctionsQueryHandler } from '../query/create-step-functions-query-handler';
import { type StepFunctionsClient } from './step-functions-client';
import { stepFunctionsClientCommandEventMap } from './step-functions-client-command-event-map';
import { type StepFunctionsClientOptions } from './step-functions-client-options';

/**
 * Creates a Step Functions client
 *
 * @param clientOptions Step Functions client options
 * @returns Step Functions client
 */
export function createStepFunctionsClient(clientOptions: StepFunctionsClientOptions): StepFunctionsClient {
  const { apiClient } = clientOptions;
  return createClient({
    command: stepFunctionsCommand,
    commandEventMap: stepFunctionsClientCommandEventMap,
    commandHandler: ({ toEvents }) => createStepFunctionsCommandHandler({ apiClient, toEvents }),
    error: stepFunctionsError,
    event: stepFunctionsEvent,
    query: stepFunctionsQuery,
    queryHandler: () => createStepFunctionsQueryHandler({ apiClient }),
  });
}
