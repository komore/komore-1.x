import { createClientCommandEventMap } from '@komore/client';
import { type CommandFromType } from '@komore/command';
import { type EventFromType } from '@komore/event';

import { type apiGatewayCommand } from '../api-gateway.command';
import { type apiGatewayEvent } from '../api-gateway.event';

/**
 * API Gateway client command-to-event map
 */
export const apiGatewayClientCommandEventMap = createClientCommandEventMap<
  CommandFromType<typeof apiGatewayCommand>,
  EventFromType<typeof apiGatewayEvent>
>()({});
