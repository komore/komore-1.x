import { type Observable } from '@komore/reactive';

/**
 * scenario() function signature
 */
export interface ScenarioFunction {
  /**
   * Defines a scenario
   *
   * @param title Feature title
   * @param block Feature block
   */
  (title: string, block: () => void | Promise<void> | Observable<void>): void;
}
