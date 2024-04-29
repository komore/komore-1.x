import { createLogEventType } from '@komore/logging';

import { webSocketDomain } from './websocket.domain';

/**
 * WebSocket log
 */
export const webSocketLog = createLogEventType(webSocketDomain, {});
