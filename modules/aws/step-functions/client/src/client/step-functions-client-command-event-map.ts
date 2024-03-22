import { createClientCommandEventMap } from '@komore/client';

import { type stepFunctionsCommand } from '../step-functions.command';
import { type stepFunctionsEvent } from '../step-functions.event';

/**
 * Step Functions client command-to-event map
 */
export const stepFunctionsClientCommandEventMap = createClientCommandEventMap<
  typeof stepFunctionsCommand,
  typeof stepFunctionsEvent
>()({});
