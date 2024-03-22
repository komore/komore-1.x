import { type StepFunctionsApiClient } from '@komore/aws/step-functions';
import { type CommandEventRecorder } from '@komore/client';

import { type stepFunctionsCommand } from '../step-functions.command';
import { type stepFunctionsEvent } from '../step-functions.event';

/**
 * Step Functions command handler options
 */
export interface StepFunctionsCommandHandlerOptions {
  /**
   * Step Functions API client
   */
  readonly apiClient: StepFunctionsApiClient;
  /**
   * Step Functions events recorder
   */
  readonly toEvents: CommandEventRecorder<typeof stepFunctionsCommand, typeof stepFunctionsEvent>;
}
