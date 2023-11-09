import { type GenericDomain } from '@komore/domain';

/**
 * Event
 *
 * @template DomainType Domain type
 * @template EventName Event name
 * @template EventParameters Event parameters
 */
export interface Event<DomainType extends GenericDomain, EventName extends string, EventParameters> {
  /**
   * Domain
   */
  readonly domain: DomainType;
  /**
   * Event name
   */
  readonly name: EventName;
  /**
   * Event parameters
   */
  readonly parameters: EventParameters;
}

/**
   * TODO
  readonly aggregateKey: string;
  readonly sequenceNumber: number;
   */
