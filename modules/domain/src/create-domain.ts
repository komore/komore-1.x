import { type Domain } from './domain';

/**
 * Creates a domain
 *
 * @param domainName Domain name
 * @returns Domain
 * @template DomainName Domain name
 */
export function createDomain<DomainName extends string>(domainName: DomainName): Domain<DomainName> {
  return {
    name: domainName,
  };
}
