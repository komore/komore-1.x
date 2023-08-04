/**
 * Domain
 *
 * @template DomainName Domain name
 */
export interface Domain<DomainName extends string> {
  /**
   * Name
   */
  readonly name: DomainName;
}
