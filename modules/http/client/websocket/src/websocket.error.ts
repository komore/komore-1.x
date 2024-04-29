import { createErrorType } from '@komore/error';

import { webSocketDomain } from './websocket.domain';

/**
 * WebSocket error
 */
export const webSocketError = createErrorType(webSocketDomain, {});
