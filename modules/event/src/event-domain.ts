/**
 * Event domain
 *
 * @template DomainName Domain name
 */
export interface EventDomain<DomainName extends string> {
  /**
   * Domain name
   */
  readonly domainName: DomainName;
}
