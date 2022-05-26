import { type EventDomain } from './event-domain';

/**
 * Creates an event domain
 *
 * @param domainName Domain name
 * @returns Event domain
 */
export function createEventDomain<DomainName extends string>(domainName: DomainName): EventDomain<DomainName> {
  return {
    domainName,
  };
}
