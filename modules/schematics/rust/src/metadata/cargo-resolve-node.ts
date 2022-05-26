export interface CargoResolveNode {
  /**
   * Dependencies (TODO)
   */
  readonly dependencies: ReadonlyArray<unknown>;
  /**
   * Dependencies (TODO)
   */
  readonly deps: ReadonlyArray<unknown>;
  /**
   * Features (TODO)
   */
  readonly features: ReadonlyArray<unknown>;
  /**
   * Identifier
   */
  readonly id: string;
}
