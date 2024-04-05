import { type Domain } from '@komore/domain';

import { type LogEventSeverity } from '../severity/log-event-severity';

/**
 * Log event
 *
 * @template DomainType Domain type
 * @template EventName Event name
 * @template EventParameters Event parameters
 */
export interface LogEvent<
  DomainType extends Domain = Domain,
  EventName extends string = string,
  EventParameters = any,
> {
  /**
   * Domain
   */
  readonly domain: DomainType;
  /**
   * Log event name
   */
  readonly name: EventName;
  /**
   * Log event parameters
   */
  readonly parameters: EventParameters;
  /**
   * Log event severity
   */
  readonly severity: LogEventSeverity;
}
