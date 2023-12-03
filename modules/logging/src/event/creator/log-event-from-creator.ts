import { type TypeCreator } from '@komore/typescript';

import { type LogEventCreator } from './log-event-creator';

/**
 * Log event from a creator type
 *
 * @template CreatorType Creator type
 * @private
 */
export type LogEventFromCreator<CreatorType extends LogEventCreator<string, TypeCreator<any, any>>> =
  ReturnType<CreatorType>;
