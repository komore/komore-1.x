import { type LogEventFromCreator } from '../creator/log-event-from-creator';
import { type LogEventType as GenericLogEventType } from './log-event-type';

/**
 * Event from event type
 *
 * @template LogEventType Log event type
 */
export type LogEventFromType<LogEventType extends GenericLogEventType> = LogEventFromCreator<
  LogEventType[keyof LogEventType & string]
>;
