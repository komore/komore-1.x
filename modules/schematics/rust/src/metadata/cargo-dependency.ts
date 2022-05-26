/**
 * Cargo dependency (TODO)
 */
export interface CargoDependency {
  /**
   * Name
   */
  readonly name: string;
  /**
   * Source path
   */
  readonly source: string | null;
}
