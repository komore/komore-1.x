import { type Domain } from '@komore/domain';

/**
 * Event
 *
 * @template DomainType Domain type
 * @template EventName Event name
 * @template EventProperties Event properties
 */
export interface Event<DomainType extends Domain = Domain, EventName extends string = string, EventProperties = any> {
  /**
   * Domain
   */
  readonly domain: DomainType;
  /**
   * Event name
   */
  readonly name: EventName;
  /**
   * Event properties
   */
  readonly properties: EventProperties;
}
