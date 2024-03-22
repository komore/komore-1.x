import { type Client } from '@komore/client';

import { type stepFunctionsCommand } from '../step-functions.command';
import { type stepFunctionsError } from '../step-functions.error';
import { type stepFunctionsEvent } from '../step-functions.event';
import { type stepFunctionsQuery } from '../step-functions.query';
import { type stepFunctionsClientCommandEventMap } from './step-functions-client-command-event-map';

/**
 * Step Functions client
 */
export interface StepFunctionsClient
  extends Client<
    typeof stepFunctionsCommand,
    typeof stepFunctionsEvent,
    typeof stepFunctionsQuery,
    typeof stepFunctionsError,
    typeof stepFunctionsClientCommandEventMap
  > {}
