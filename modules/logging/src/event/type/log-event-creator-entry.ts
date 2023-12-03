import { type TypeCreator } from '@komore/typescript';

import { type LogEventCreator } from '../creator/log-event-creator';

/**
 * Log event creator entry
 *
 * @private
 */
export type LogEventCreatorEntry = readonly [
  logEventName: string,
  logEventCreator: LogEventCreator<string, TypeCreator<any, any>>,
];
