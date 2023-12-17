import { type GenericDomain } from '@komore/domain';

/**
 * Event
 *
 * @template DomainType Domain type
 * @template EventName Event name
 * @template EventProperties Event properties
 */
export interface Event<DomainType extends GenericDomain, EventName extends string, EventProperties> {
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

/**
   * TODO
  readonly aggregateKey: string;
  readonly sequenceNumber: number;
   */
