/**
 * Scenario block
 */
export interface ScenarioBlock {
  (): void | Observable<void> | Promise<void>;
}
