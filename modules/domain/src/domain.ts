/**
 * Domain
 *
 * @template DomainName Domain name
 */
export interface Domain<DomainName extends string> {
  /**
   * Domain name
   */
  readonly domainName: DomainName;
}
