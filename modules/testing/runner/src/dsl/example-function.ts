import { type Observable } from '@komore/reactive';

/**
 * example() function signature
 */
export interface ExampleFunction {
  /**
   * Defines an example
   *
   * @param title Example title
   * @param block Example block
   */
  (exampleTitle: string, exampleBlock: () => void | Promise<void> | Observable<void>): void;
}
