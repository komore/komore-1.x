import { type Domain } from './domain';

/**
 * Defines a domain
 *
 * @param domainName Domain name
 * @returns Domain
 * @template DomainName Domain name
 */
export function defineDomain<DomainName extends string>(domainName: DomainName): Domain<DomainName> {
  return {
    domainName,
  };
}
